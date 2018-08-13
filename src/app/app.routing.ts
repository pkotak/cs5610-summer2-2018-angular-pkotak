import {RouterModule, Routes} from '@angular/router';
import {CourseNavigatorComponent} from './course-navigator/course-navigator.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {WhiteBoardComponent} from './white-board/white-board.component';
import {SectionListComponent} from './section-list/section-list.component';
import {AdminComponent} from './admin/admin.component';
import {QuizListComponent} from './quiz-list/quiz-list.component';
import {QuizTakerComponent} from './quiz-taker/quiz-taker.component';
import {SubmissionListComponent} from './submission-list/submission-list.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: WhiteBoardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'quiz', component: QuizListComponent},
  {path: 'quiz/:quizId', component: QuizTakerComponent},
  {path: 'quiz/:quizId/submissions', component: SubmissionListComponent},
  {path: 'course/:courseId', component: CourseNavigatorComponent},
  {path: 'course/:courseId/section', component: SectionListComponent},
  {path: 'course/:courseId/sections', component: AdminComponent},
  {path: 'course/:courseId/module/:moduleId', component: CourseNavigatorComponent},
  {path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: CourseNavigatorComponent},
  {path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId', component: CourseNavigatorComponent},
  {path: '**', component: WhiteBoardComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
