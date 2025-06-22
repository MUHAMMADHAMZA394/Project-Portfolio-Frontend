import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface Education {
  educationId?: string;
  subject: string;
  passingYear?: number;
  totalMarks?: number;
  obtained?: number;
  pdf?: any;
  degree: string;
  duration: string;
  subjects: string[];
}
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  educations: Education[] = [
    {
      educationId: '550e8400-e29b-41d4-a716-446655440001',
      subject: 'Matric (Math, Physics, Chemistry, Biology)',
      passingYear: 2018,
      totalMarks: 1100,
      obtained: 922,
      pdf: null,
      degree: 'Matriculation',
      duration: '2016-2018',
      subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology']
    },
    {
      educationId: '550e8400-e29b-41d4-a716-446655440002',
      subject: 'FSC (Math, Physics, Chemistry)',
      passingYear: 2020,
      totalMarks: 1100,
      obtained: 820,
      pdf: null,
      degree: 'Intermediate',
      duration: '2018-2020',
      subjects: ['Mathematics', 'Physics', 'Chemistry']
    },
    {
      educationId: '550e8400-e29b-41d4-a716-446655440003',
      subject: 'Bachelor in Computer Science',
      passingYear: 2024,
      totalMarks: 4.0,
      obtained: 3.14,
      pdf: null,
      degree: 'Bachelor\'s Degree',
      duration: '2020-2024',
      subjects: ['Programming', 'Data Structures', 'Design Analysis of Algorithm', 'OOP','Database Sql']
    }
  ];

  // Modal and form properties
  showModal: boolean = false;
  isEditing: boolean = false;
  currentEducation: Education = this.getEmptyEducation();
  subjectsString: string = '';

  // Computed properties
  get averagePercentage(): string {
    if (this.educations.length === 0) return '0.0';
    const totalPercentages = this.educations.map(edu =>
      this.calculatePercentage(edu.obtained!, edu.totalMarks!)
    );
    const avg = totalPercentages.reduce((a, b) => a + b, 0) / totalPercentages.length;
    return avg.toFixed(1);
  }

  get latestYear(): number {
    if (this.educations.length === 0) return new Date().getFullYear();
    return Math.max(...this.educations.map(edu => edu.passingYear!));
  }

  get topScore(): string {
    if (this.educations.length === 0) return '0.0';
    const percentages = this.educations.map(edu =>
      this.calculatePercentage(edu.obtained!, edu.totalMarks!)
    );
    return Math.max(...percentages).toFixed(1);
  }

  constructor() { }

  ngOnInit(): void {
    // Initialize component
  }

  // Utility functions
  calculatePercentage(obtained: number, total: number): number {
    if (total <= 4.0) {
      // Handle CGPA case
      return (obtained / total) * 100;
    }
    return (obtained / total) * 100;
  }

  getGradeColor(percentage: number): string {
    if (percentage >= 90) return 'grade-excellent';
    if (percentage >= 80) return 'grade-good';
    if (percentage >= 70) return 'grade-average';
    return 'grade-poor';
  }

  getGradeBg(percentage: number): string {
    if (percentage >= 90) return 'grade-bg-excellent';
    if (percentage >= 80) return 'grade-bg-good';
    if (percentage >= 70) return 'grade-bg-average';
    return 'grade-bg-poor';
  }

  getGradeColorHex(percentage: number): string {
    if (percentage >= 90) return '#10b981'; // Green
    if (percentage >= 80) return '#3b82f6'; // Blue
    if (percentage >= 70) return '#f59e0b'; // Yellow
    return '#ef4444'; // Red
  }

  getDegreeIcon(degree: string): string {
    switch (degree.toLowerCase()) {
      case 'matriculation': return 'fa-school';
      case 'intermediate': return 'fa-graduation-cap';
      case "bachelor's degree": return 'fa-university';
      default: return 'fa-certificate';
    }
  }

  formatMarks(obtained: number, total: number): string {
    if (total <= 4.0) {
      return `CGPA: ${obtained}/${total}`;
    }
    return `${obtained}/${total} marks`;
  }

  // New functions for Academic Excellence section
  getExcellenceBg(percentage: number): string {
    if (percentage >= 90) return 'bg-green-50';
    if (percentage >= 80) return 'bg-blue-50';
    if (percentage >= 70) return 'bg-yellow-50';
    return 'bg-red-50';
  }

  getExcellenceIcon(percentage: number): string {
    if (percentage >= 90) return 'fa-medal';
    if (percentage >= 80) return 'fa-star';
    if (percentage >= 70) return 'fa-thumbs-up';
    return 'fa-arrow-up';
  }

  getExcellenceText(percentage: number): string {
    if (percentage >= 90) return 'Outstanding Performance';
    if (percentage >= 80) return 'Excellent Achievement';
    if (percentage >= 70) return 'Good Performance';
    return 'Satisfactory Result';
  }

  // Modal functions
  openModal(): void {
    this.showModal = true;
    this.isEditing = false;
    this.currentEducation = this.getEmptyEducation();
    this.subjectsString = '';
  }

  closeModal(): void {
    this.showModal = false;
    this.isEditing = false;
    this.currentEducation = this.getEmptyEducation();
    this.subjectsString = '';
  }

  editEducation(education: Education): void {
    this.showModal = true;
    this.isEditing = true;
    this.currentEducation = { ...education };
    this.subjectsString = education.subjects.join(', ');
  }

  deleteEducation(educationId: string): void {
    if (confirm('Are you sure you want to delete this education record?')) {
      this.educations = this.educations.filter(edu => edu.educationId !== educationId);
    }
  }

  saveEducation(): void {
    // Validate obtained marks
    if (this.currentEducation.obtained! > this.currentEducation.totalMarks!) {
      alert('Obtained marks/CGPA cannot be greater than total marks/CGPA!');
      return;
    }

    // Parse subjects string
    this.currentEducation.subjects = this.subjectsString
      .split(',')
      .map(subject => subject.trim())
      .filter(subject => subject.length > 0);

    if (this.isEditing) {
      // Update existing education
      const index = this.educations.findIndex(edu =>
        edu.educationId === this.currentEducation.educationId
      );
      if (index !== -1) {
        this.educations[index] = { ...this.currentEducation };
      }
    } else {
      // Add new education
      this.currentEducation.educationId = this.generateGuid();
      this.educations.push({ ...this.currentEducation });
    }

    this.closeModal();
  }

  // Helper functions
  private getEmptyEducation(): Education {
    return {
      educationId: '',
      subject: '',
      passingYear: new Date().getFullYear(),
      totalMarks: 0,
      obtained: 0,
      pdf: null,
      degree: '',
      duration: '',
      subjects: []
    };
  }

  private generateGuid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  // API integration methods (for future use)
  async loadEducations(): Promise<void> {
    try {
      // Replace with actual API call
      // const response = await this.educationService.getEducations();
      // this.educations = response.data;
      console.log('Loading educations from API...');
    } catch (error) {
      console.error('Error loading educations:', error);
    }
  }
}
