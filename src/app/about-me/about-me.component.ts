import { Component } from '@angular/core';
import { ArrowComponent } from '../arrow/arrow.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [ArrowComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

}
