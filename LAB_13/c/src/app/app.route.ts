import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { StudentComponent } from './student/student.component';
import { ProfileComponent } from './profile/profile.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ProfileGuard } from './guard';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'student', component: StudentComponent },
  {
    path: 'profile/:id',
    component: ProfileComponent,
    canActivate: [ProfileGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ProfileGuard]
  },
  { path: 'error', component: ErrorPageComponent },
  // { path: 'profile', redirectTo: '/error', pathMatch: 'full'  }
];

export const myRoute = RouterModule.forRoot(APP_ROUTES);
