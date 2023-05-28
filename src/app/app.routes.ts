
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./SplashScreen/SplashScreen.routes').then( m => m.routes)
  },
];
