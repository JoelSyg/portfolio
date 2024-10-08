import { Component } from '@angular/core';
import { ArrowComponent } from '../../arrow/arrow.component';
import { ScrollService } from '../../services/scroll.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [ArrowComponent, TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {

  constructor(private scrollService: ScrollService) {}

  onButtonClick() {
    this.scrollService.scrollToSection('sayHi');
  }
}

