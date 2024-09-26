import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ScrollService } from '../../services/scroll.service';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  translate = inject(TranslationService);

  constructor(private scrollService: ScrollService, private router: Router) {}

  menuOpen = false;
  language = "en";
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
      if (index >= this.transitionImagesOpen.length) {
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
      if (index >= this.transitionImagesClose.length) {
        clearInterval(interval);
        this.imgSource = "./assets/img/menu_icon.svg";
      }
    }, 40);
  }

  scrollToSection(section: string) {
    this.router.navigate(['/']).then(() => {
      let offset = 0;
  
      if (section === 'mySkills') {
        offset = 20;
      }

      if (section === 'portfolio') {
        offset = 80;
      }

      if (section === 'aboutMe') {
        offset = 100;
      }

      if (section === 'sayHi') {
        offset = -120;
      }
  
      this.scrollService.scrollToSection(section, offset);
    });
  }
  


  toggleMarkedLanguage(lang: string) {
    this.language = lang;
    this.translate.switchLanguage(lang);
  }  

  isLanguageSelected(lang: string): boolean {
    return this.language === lang;
  }
} 