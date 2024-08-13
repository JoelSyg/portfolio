import { Routes } from '@angular/router';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { MainPageComponent } from './main-page/main-page.component';

export const routes: Routes = [
    { path: 'legal-notice', component: LegalNoticeComponent },
    { path: 'main-page', component: MainPageComponent }
];