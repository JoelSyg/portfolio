import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeroSectionComponent } from './main-page/hero-section/hero-section.component';
import { AboutMeComponent } from './main-page/about-me/about-me.component';
import { MySkillsComponent } from './main-page/my-skills/my-skills.component';
import { PortfolioComponent } from './main-page/portfolio/portfolio.component';
import { SayHiComponent } from './main-page/say-hi/say-hi.component';
import { ReferencesComponent } from './main-page/references/references.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeroSectionComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioComponent,
    SayHiComponent,
    ReferencesComponent,
    FooterComponent,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';
}
