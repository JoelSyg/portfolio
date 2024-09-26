import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ReferencesComponent } from './references/references.component';
import { SayHiComponent } from './say-hi/say-hi.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroSectionComponent,
    MySkillsComponent,
    AboutMeComponent,
    PortfolioComponent,
    ReferencesComponent,
    SayHiComponent,
    FooterComponent,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {}
