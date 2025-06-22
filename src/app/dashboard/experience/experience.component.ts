import { Component } from '@angular/core';

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  isActive: boolean;
  description: string;
  technologies: string[];
  highlights: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      id: 1,
      title: "Associate Software Engineer",
      company: "The Urban Unit",
      location: "Lahore, Pakistan",
      duration: "04/2024 - Present",
      isActive: true,
      description: "Contributed to the Urban Immovable Property Tax System for Punjab (UIPT) by implementing both frontend features and backend RESTful APIs.",
      technologies: ["ASP.NET Core Web API", "Angular 17+", "RESTful APIs"],
      highlights: [
        "Implemented RESTful API using ASP.NET Core Web API",
        "Developed Front End Design using Latest Angular 17+",
        "Contributed to government tax system for Punjab"
      ]
    },
    {
      id: 2,
      title: "Frontend Developer Intern",
      company: "SherServe",
      location: "Faisalabad",
      duration: "08/2023 - 10/2023",
      isActive: false,
      description: "Completed a 3-month internship as a Frontend Developer at SherServe Software House.",
      technologies: ["Angular", "Reactive Forms", "Routing Modules"],
      highlights: [
        "Gained hands-on experience in building web applications using Angular",
        "Implemented reactive forms and routing modules",
        "Streamlined user interactions and navigation"
      ]
    }
  ];
}
