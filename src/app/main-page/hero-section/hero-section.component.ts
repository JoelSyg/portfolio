import { Component } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  constructor(private scrollService: ScrollService) {}

  onButtonClick() {
    this.scrollService.scrollToSection('sayHi');
  }
}
