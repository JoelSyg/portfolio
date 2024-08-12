import { Component, OnInit } from '@angular/core';
import { ArrowComponent } from '../arrow/arrow.component';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [ArrowComponent],
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss'],
})
export class ReferencesComponent implements OnInit {
  references = [
    {
      name: 'Alexander Hähnlein',
      text: 'Joel zeigte eine beeindruckende Fähigkeit, sich rasch in die komplexen Aspekte unseres "Join"-Projekts (Kanban) einzuarbeiten. Besonders beeindruckend war seine Fähigkeit, bei schwierigen Herausforderungen durchdachte und kreative Ansätze zu entwickeln. Die Zusammenarbeit mit ihm war sehr positiv, und ich kann ihn uneingeschränkt weiterempfehlen.',
    },
    {
      name: 'Jonas Mahlburg',
      text: 'Mit Joel zusammen zu arbeiten hat viel Spaß gemacht. Joel war sehr hilfsbereit bei Fragen und konnte seine Aufgaben sehr zuverlässig erledigen und sowohl im Team als auch einzeln sein Potenzial ausschöpfen. Gerne wieder',
    },
    {
      name: 'Mailo Mittelstädt',
      text: 'Joel ist in Gruppenarbeiten eine echte Bereicherung, da er stets mit Engagement und positiver Energie bei der Sache ist. Seine Fähigkeit, kreative Lösungen zu finden. Zudem zeigt Joel stets großes Verantwortungsbewusstsein und unterstützt seine Teammitglieder jederzeit tatkräftig.',
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
