import { Component } from '@angular/core';
import { ArrowComponent } from '../../arrow/arrow.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [ArrowComponent, TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent {
  skills = [
    {
      name: 'Angular',
      image: './assets/img/angular_icon.svg',
    },
    {
      name: 'TypeScript',
      image: './assets/img/ts_icon.svg',
    },
    {
      name: 'JavaScript',
      image: './assets/img/js_icon.svg',
    },
    {
      name: 'HTML',
      image: './assets/img/html_icon.svg',
    },
    {
      name: 'CSS',
      image: './assets/img/css_icon.svg',
    },
    {
      name: 'Firebase',
      image: './assets/img/firebase_icon.svg',
    },
    {
      name: 'Git',
      image: './assets/img/git_icon.svg',
    },
    {
      name: 'Scrum',
      image: './assets/img/scrum_icon.svg',
    },
    {
      name: 'Rest-Api',
      image: './assets/img/api_icon.svg',
    },
    {
      name: 'Material Design',
      image: './assets/img/material_icon.svg',
    },
  ];
}
