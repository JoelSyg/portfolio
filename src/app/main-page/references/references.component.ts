import { Component, OnInit } from '@angular/core';
import { ArrowComponent } from '../../arrow/arrow.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [ArrowComponent, TranslateModule],
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss'],
})
export class ReferencesComponent implements OnInit {
  references = [
    {
      name: 'Alexander Hähnlein',
      text: 'reference_alexander',
    },
    {
      name: 'Jonas Mahlburg',
      text: 'reference_jonas',
    },
    {
      name: 'Mailo Mittelstädt',
      text: 'reference_mailo',
    },
  ];

  currentReference = 0;
  reference!: {
    name: string;
    text: string;
  };

  ngOnInit() {
    this.renderReference();
  }

  nextReference() {
    if (this.currentReference < this.references.length - 1) {
      this.currentReference++;
    } else {
      this.currentReference = 0;
    }
    this.renderReference();
  }

  lastReference() {
    if (this.currentReference > 0) {
      this.currentReference--;
    } else {
      this.currentReference = this.references.length - 1;
    }
    this.renderReference();
  }

  renderReference() {
    this.reference = this.references[this.currentReference];
  }
}
