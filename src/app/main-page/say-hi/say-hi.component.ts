import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastService } from '../../services/toast.service';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-say-hi',
  standalone: true,
  imports: [FormsModule, RouterModule, TranslateModule],
  templateUrl: './say-hi.component.html',
  styleUrl: './say-hi.component.scss'
})
export class SayHiComponent {

  constructor (private scrollService: ScrollService) {

  }

  http = inject(HttpClient);
  toastService = inject(ToastService);

  contactData = {
    name: "",
    email: "",
    message: ""
  };


  isChecked: boolean = false;
  checkboxBlankImg: string = "/assets/img/check_box_blank.svg";
  checkboxFilledImg: string = "/assets/img/check_box.svg";

  toggleCheckbox(): void {
    this.isChecked = !this.isChecked;
  }

  getCheckboxImg(): string {
    return this.isChecked ? this.checkboxFilledImg : this.checkboxBlankImg;
  }

  post = {
    endPoint: 'https://joel-sygulla.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (!ngForm.valid || !this.isChecked) {
      // Setzt alle Felder als berührt, um Fehlermeldungen anzuzeigen
      ngForm.form.markAllAsTouched();  
      return;
    }
  
    this.http.post(this.post.endPoint, this.post.body(this.contactData))
      .subscribe({
        next: (response) => {
          this.toastService.show('Message sent successfully!', 3000);
          ngForm.resetForm();
        },
        error: (error) => {
          this.toastService.show('Failed to send message. Please try again.', 3000);
        },
      });
  }

  scrollToSection(section: string) {
     {
      this.scrollService.scrollToSection(section);
    };
  }
  

}