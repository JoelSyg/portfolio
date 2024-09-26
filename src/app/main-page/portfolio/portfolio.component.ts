import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterModule, ProjectComponent, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
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
      technologies: ['Javascript', 'HTML', 'CSS', 'Firebase'],
      description: 'joinDescription',
      livetestLink: 'https://join-project.joel-sygulla.de/',
      githubLink: 'https://github.com/JoelSyg/Join',
      imageUrl: './assets/img/join_img.png',
    },
    {
      title: 'Pollo Loco',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      description: 'polloLocoDescription',
      livetestLink: '#',
      githubLink: 'https://github.com/JoelSyg/El-Pollo-Loco',
      imageUrl: './assets/img/polloloco_img.png',
    },
  ];
}
