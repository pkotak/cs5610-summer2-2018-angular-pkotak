import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {CourseNavigatorServiceClient} from './service/course-navigator.service.client';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import {UserServiceClient} from './service/user.service.client';
import {routing} from './app.routing';
import { WhiteBoardComponent } from './white-board/white-board.component';
import { CourseGridComponent } from './course-grid/course-grid.component';
import { SectionListComponent } from './section-list/section-list.component';
import {SectionServiceClient} from './service/section.service.client';
import { WidgetListComponent } from './widget-list/widget-list.component';
import { AdminComponent } from './admin/admin.component';
import { AdminSectionListComponent } from './admin-section-list/admin-section-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseNavigatorComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    WhiteBoardComponent,
    CourseGridComponent,
    SectionListComponent,
    WidgetListComponent,
    AdminComponent,
    AdminSectionListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    CourseNavigatorServiceClient,
    UserServiceClient,
    SectionServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
