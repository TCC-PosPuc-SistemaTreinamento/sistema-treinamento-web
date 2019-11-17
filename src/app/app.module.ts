import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgDatepickerModule } from 'ng2-datepicker';
import { OwlModule } from 'ngx-owl-carousel';
// import { TagInputModule } from 'ngx-chips';
import { ModalModule } from 'ngx-bootstrap/modal';
// import { ChartsModule } from 'ng2-charts';

import { AppRoutes } from './app.routing';
import { AuthGuard } from './shared/AuthGuard';
import { AdminGuard } from './shared/AdminGuard';
import { HttpClient } from './shared/wrappers/HttpClient';
import { Upload } from './shared/wrappers/Upload';
import { LocalStorage } from './shared/wrappers/LocalStorage';
import { SecurityService } from './services/security.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { CourseService } from './services/course.service';
import { RoleService } from './services/role.service';
import { DepartmentService } from './services/department.service';
import { CommonHelper } from './shared/helpers/CommonHelper';
import { CategoryService } from './services/category.service';
import { QuizService } from './services/quiz.service';
import { EnrollService } from './services/enroll.service';
import { WatchService } from './services/watch.service';
import { GradeService } from './services/grade.service';
import { DashboardService } from './services/dashboard.service';

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
import { CategoriesComponent } from './views/categories/categories.component';
import { RecoveryPasswordComponent } from './views/recovery-password/recovery-password.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ConquestsComponent } from './views/conquests/conquests.component';
import { CertificatesComponent } from './views/certificates/certificates.component';
import { SuggestionsComponent } from './views/suggestions/suggestions.component';
import { DepartmentsComponent } from './views/departments/departments.component';
import { RolesComponent } from './views/roles/roles.component';
import { QuestionsComponent } from './views/questions/questions.component';
import { CourseVisualizationComponent } from './views/courses/course-visualization/course-visualization.component';
import { CourseMyComponent } from './views/courses/course-my/course-my.component';
import { QuestionCreateComponent } from './views/questions/question-create/question-create.component';
import { QuestionEditComponent } from './views/questions/question-edit/question-edit.component';
import { FactoryModule } from "./shared/factories/factory.module";
import { UiSwitchModule } from 'ng2-ui-switch';
import { UnitVideoComponent } from './views/courses/course-visualization/unit-video/unit-video.component';
import { CourseCardComponent } from './views/courses/course-card/course-card.component';
import { QuestionFormComponent } from './views/questions/question-form/question-form.component';
import { ModalEvaluationComponent } from './views/courses/course-visualization/modal-evaluation/modal-evaluation.component';
import { ModalQuizComponent } from './views/courses/course-visualization/modal-quiz/modal-quiz.component';
import { MaterialComponent } from './views/courses/course-visualization/material/material.component';
import { ChangePasswordComponent } from './views/change-password/change-password.component';

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
    CategoriesComponent,
    RecoveryPasswordComponent,
    DashboardComponent,
    ConquestsComponent,
    CertificatesComponent,
    SuggestionsComponent,
    DepartmentsComponent,
    RolesComponent,
    QuestionsComponent,
    CourseVisualizationComponent,
    CourseMyComponent,
    UnitVideoComponent,
    CourseCardComponent,
    QuestionCreateComponent,
    QuestionEditComponent,
    QuestionFormComponent,
    ModalEvaluationComponent,
    ModalQuizComponent,
    MaterialComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(AppRoutes),
    FactoryModule,
    UiSwitchModule,
    NgDatepickerModule,
    OwlModule,
    // ChartsModule,
    ModalModule.forRoot(),
    // TagInputModule
  ],
  providers: [
    AuthGuard,
    AdminGuard,
    HttpClient,
    Upload,
    LocalStorage,
    CommonHelper,
    SecurityService,
    CategoryService,
    QuizService,
    EnrollService,
    WatchService,
    AuthService,
    GradeService,
    UserService,
    CourseService,
    DashboardService,
    RoleService,
    DepartmentService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalQuizComponent,
    UnitVideoComponent
  ]
})
export class AppModule { }
