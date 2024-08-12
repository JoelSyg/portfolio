import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  @Input() project!: {
    title: string;
    technologies: string[];
    description: string;
    livetestLink: string;
    githubLink: string;
    imageUrl: string;
  };

  @Input() additionalClass: string = '';

  @Input() projectNumber: number = 0;

  @Input() totalProjects: number = 0;

  get formattedProjectNumber(): string {
    const formattedNumber = this.projectNumber < 10 ? `0${this.projectNumber}` : `${this.projectNumber}`;
    const formattedTotal = this.totalProjects < 10 ? `0${this.totalProjects}` : `${this.totalProjects}`;
    return `${formattedNumber}/${formattedTotal}`;
  }
}



