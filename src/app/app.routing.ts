import {RouterModule, Routes} from '@angular/router';
import {CourseNavigatorComponent} from './course-navigator/course-navigator.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {WhiteBoardComponent} from './white-board/white-board.component';
import {SectionListComponent} from './section-list/section-list.component';
import {EnrollmentComponent} from './enrollment/enrollment.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: WhiteBoardComponent},
  {path: 'enrollments', component: EnrollmentComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'wb', component: WhiteBoardComponent},
  {path: 'course/:courseId/section', component: SectionListComponent},
  {path: 'course/:courseId', component: CourseNavigatorComponent},
  {path: '**', component: CourseNavigatorComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
