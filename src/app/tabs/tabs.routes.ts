import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'Practice',
        loadComponent: () => import('../Practice/Practice.page').then(m => m.PracticePage)
      },
      {
        path: 'Lessons',
        loadComponent: () => import('../Lessons/Lessons.page').then(m => m.LessonsPage)
      },
      {
        path: 'LeaderBoard',
        loadComponent: () => import('../LeaderBoard/Leaderboard.page').then(m => m.LeaderBoardPage)
      },
      {
        path: 'Profile',
        loadComponent: () => import('../Profile/Profile.page').then( m => m.ProfilePage)
      },
    ]
  },
  {
    path: 'splashScreen',
    loadComponent: () => import('../SplashScreen/SplashScreen.page').then(m => m.SplashScreenPage)
  },
  {
    path: '',
    redirectTo: '/splashScreen',
    pathMatch: 'full'
  }
];
