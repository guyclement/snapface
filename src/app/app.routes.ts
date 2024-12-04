import { Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { LandingPageComponentComponent } from './landing-page-component/landing-page-component.component';

export const routes: Routes = [
    { path: 'facesnaps', component: FaceSnapListComponent },
    { path: '', component: LandingPageComponentComponent },
];
