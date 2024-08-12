import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  menuOpen = false;
  imgSource = "./assets/img/menu_icon.svg";

  transitionImagesOpen = [
    "./assets/img/menu_transition3.svg",
    "./assets/img/menu_transition2.svg",
    "./assets/img/menu_transition1.svg"
  ];

  transitionImagesClose = [
    "./assets/img/menu_transition1.svg",
    "./assets/img/menu_transition2.svg",
    "./assets/img/menu_transition3.svg"
  ];

  toggleMenu() {
    this.menuOpen = !this.menuOpen;

    if (this.menuOpen) {
      this.playOpenAnimation();
    } else {
      this.playCloseAnimation();
    }
  }

  playOpenAnimation() {
    let index = 0;
    const interval = setInterval(() => {
      this.imgSource = this.transitionImagesOpen[index];
      index++;
      if (index > this.transitionImagesOpen.length) {
        clearInterval(interval);
        this.imgSource = "./assets/img/x_icon.svg";
      }
    }, 40);
  }

  playCloseAnimation() {
    let index = 0;
    const interval = setInterval(() => {
      this.imgSource = this.transitionImagesClose[index];
      index++;
      if (index > this.transitionImagesClose.length) {
        clearInterval(interval);
        this.imgSource = "./assets/img/menu_icon.svg";
      }
    }, 40);
  }
}

