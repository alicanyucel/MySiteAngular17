import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',  // Redirect to 'home' path
    pathMatch: 'full'     // Only redirect if the path is exactly ''
  },
  {
    path: '',
    component: AppComponent // Home component (AppComponent in your case)
  }
];
