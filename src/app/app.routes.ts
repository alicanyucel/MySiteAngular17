import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'app',  // 'home' path'ine yönlendir
    pathMatch: 'full'    // sadece tam eşleşmede yönlendir
  },
  {
    path: 'home',
    component: AppComponent
  }
];