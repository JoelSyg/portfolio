import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectComponent } from './project/project.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterModule, ProjectComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  projects: {
    title: string;
    technologies: string[];
    description: string;
    livetestLink: string;
    githubLink: string;
    imageUrl: string;
  }[] = [
    {
      title: 'Join',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories',
      livetestLink: '#',
      githubLink: '#',
      imageUrl: './assets/img/join_img.png'
    },
    {
      title: 'Pollo Loco',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      livetestLink: '#',
      githubLink: '#',
      imageUrl: './assets/img/polloloco_img.png'
    }
  ];
}

