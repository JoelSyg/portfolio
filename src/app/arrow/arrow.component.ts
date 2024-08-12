import {
  Component,
  HostListener,
  Input,
  OnInit,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-arrow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.scss'],
})
export class ArrowComponent implements OnInit {
  @Input() direction: 'left' | 'right' = 'right';
  @Input() imgSrc: string = '';
  @Input() marginRight: string = '0';
  @Input() marginLeft: string = '0';
  isArrowVisible = false;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.checkScroll();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    this.checkScroll();
  }

  checkScroll(): void {
    const arrowWrap = this.el.nativeElement.querySelector(
      '.arrow-wrap'
    ) as HTMLElement;
    if (arrowWrap) {
      const rect = arrowWrap.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const middleOfViewport = viewportHeight / 1.5;

      if (rect.top + rect.height / 1.5 <= middleOfViewport) {
        this.isArrowVisible = true;
      }
    }
  }
}
