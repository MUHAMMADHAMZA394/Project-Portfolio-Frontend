import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  educationForm: FormGroup;
  educationList: any[] = [];

  constructor(private fb: FormBuilder) {
    this.educationForm = this.fb.group({
      degreeName: ['', Validators.required],
      majorSubject: ['', Validators.required],
      passingYear: ['', Validators.required],
      totalMarks: ['', Validators.required],
      obtainedMarks: ['', Validators.required],
      degreeFile: [null, Validators.required]
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.educationForm.patchValue({ degreeFile: file });
    }
  }

  onSubmit() {
    if (this.educationForm.valid) {
      const formData = { ...this.educationForm.value };
      formData.degreeFileUrl = URL.createObjectURL(formData.degreeFile); // Temporary file URL
      this.educationList.push(formData);
      this.educationForm.reset();
    }
  }
}
