import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
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
}
