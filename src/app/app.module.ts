import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutes } from './app.routing';
import { AuthGuard } from './shared/AuthGuard';
import { HttpClient } from './shared/wrappers/HttpClient';
import { LocalStorage } from './shared/wrappers/LocalStorage';
import { SecurityService } from './services/security.service';
import { AuthService } from './services/auth.service';

import { AppComponent } from './app.component';
import { CoursesComponent } from './views/courses/courses.component';
import { CourseCreateComponent } from './views/courses/course-create/course-create.component';
import { CourseEditComponent } from './views/courses/course-edit/course-edit.component';
import { LoginComponent } from './views/login/login.component';
import { SideBarComponent } from './views/side-bar/side-bar.component';
import { CourseDetailComponent } from './views/courses/course-detail/course-detail.component';
import { UsersComponent } from './views/users/users.component';
import { UserDetailComponent } from './views/users/user-detail/user-detail.component';
import { UserCreateComponent } from './views/users/user-create/user-create.component';
import { UserEditComponent } from './views/users/user-edit/user-edit.component';
import { HomeComponent } from './views/home/home.component';
import { CetegoriesComponent } from './views/cetegories/cetegories.component';
import { PermissionsComponent } from './views/permissions/permissions.component';
import { RecoveryPasswordComponent } from './views/recovery-password/recovery-password.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseCreateComponent,
    CourseEditComponent,
    LoginComponent,
    SideBarComponent,
    CourseDetailComponent,
    UsersComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    HomeComponent,
    CetegoriesComponent,
    PermissionsComponent,
    RecoveryPasswordComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    // routing
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    AuthGuard,
    HttpClient,
    LocalStorage,
    SecurityService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
