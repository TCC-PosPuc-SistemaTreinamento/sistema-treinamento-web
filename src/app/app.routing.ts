import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AuthGuard } from './shared/AuthGuard';
import { AdminGuard } from './shared/AdminGuard';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RecoveryPasswordComponent } from './views/recovery-password/recovery-password.component';
import { CoursesComponent } from './views/courses/courses.component';
import { CourseCreateComponent } from './views/courses/course-create/course-create.component';
import { CourseDetailComponent } from './views/courses/course-detail/course-detail.component';
import { CourseEditComponent } from './views/courses/course-edit/course-edit.component';
import { CourseVisualizationComponent } from "./views/courses/course-visualization/course-visualization.component";
import { CourseMyComponent } from "./views/courses/course-my/course-my.component";
import { DashboardComponent } from "./views/dashboard/dashboard.component";
import { ConquestsComponent } from "./views/conquests/conquests.component";
import { CertificatesComponent } from "./views/certificates/certificates.component";
import { QuestionsComponent } from "./views/questions/questions.component";
import { QuestionCreateComponent } from "./views/questions/question-create/question-create.component";
import { QuestionEditComponent } from "./views/questions/question-edit/question-edit.component";
import { SuggestionsComponent } from "./views/suggestions/suggestions.component";
import { UsersComponent } from "./views/users/users.component";
import { UserCreateComponent } from "./views/users/user-create/user-create.component";
import { UserEditComponent } from "./views/users/user-edit/user-edit.component";
import { UserDetailComponent } from "./views/users/user-detail/user-detail.component";
import { CategoriesComponent } from "./views/categories/categories.component";
import { DepartmentsComponent } from "./views/departments/departments.component";
import { RolesComponent } from "./views/roles/roles.component";
import { MaterialComponent } from './views/courses/course-visualization/material/material.component';
import { ChangePasswordComponent } from './views/change-password/change-password.component';

export const AppRoutes: Routes = [
    {
        path: "",
        redirectTo: "/login",
        pathMatch: "full"
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
      path: "change-password",
      component: ChangePasswordComponent,
      canActivate: [AuthGuard],
      pathMatch: "full"
    },
    {
        path: "password/forgot",
        component: RecoveryPasswordComponent,
        pathMatch: "full"
    },
    {
        path: "home",
        component: HomeComponent,
        canActivate: [AuthGuard],
        pathMatch: "full"
    },
    {
        path: "courses",
        children: [
            {
                path: "new",
                component: CourseCreateComponent,
                canActivate: [AuthGuard, AdminGuard],
                pathMatch: "full"
            },
            {
                path: "my",
                component: CourseMyComponent,
                canActivate: [AuthGuard],
                pathMatch: "full"
            },
            {
                path: "my/:id",
                component: CourseVisualizationComponent,
                canActivate: [AuthGuard],
                pathMatch: "full"
            },
            {
                path: "edit/:id",
                component: CourseEditComponent,
                canActivate: [AuthGuard, AdminGuard],
                pathMatch: "full"
            },
            {
                path: "material/:material",
                component: MaterialComponent,
                canActivate: [AuthGuard],
                pathMatch: "full"
            },
            {
                path: "",
                component: CoursesComponent,
                canActivate: [AuthGuard],
                pathMatch: "full"
            },
            {
                path: ":id",
                component: CourseDetailComponent,
                canActivate: [AuthGuard],
                pathMatch: "full"
            }
        ]
    },
    {
        path: "dashboard",
        component: DashboardComponent,
        canActivate: [AuthGuard, AdminGuard],
        pathMatch: "full"
    },
    {
        path: "conquests",
        component: ConquestsComponent,
        canActivate: [AuthGuard],
        pathMatch: "full"
    },
    {
        path: "certificates",
        component: CertificatesComponent,
        canActivate: [AuthGuard],
        pathMatch: "full"
    },
    {
        path: "questions",
        children: [
            {
                path: "new",
                component: QuestionCreateComponent,
                canActivate: [AuthGuard, AdminGuard],
                pathMatch: "full"
            },
            {
                path: "edit/:id",
                component: QuestionEditComponent,
                canActivate: [AuthGuard, AdminGuard],
                pathMatch: "full"
            },
            {
                path: "",
                component: QuestionsComponent,
                canActivate: [AuthGuard, AdminGuard],
                pathMatch: "full"
            }
        ]
    },
    {
        path: "suggestions",
        component: SuggestionsComponent,
        canActivate: [AuthGuard],
        pathMatch: "full"
    },
    {
        path: "users",
        children: [
            {
                path: "new",
                component: UserCreateComponent,
                canActivate: [AuthGuard, AdminGuard],
                pathMatch: "full"
            },
            {
                path: "edit/:id",
                component: UserEditComponent,
                canActivate: [AuthGuard, AdminGuard],
                pathMatch: "full"
            },
            {
                path: "",
                component: UsersComponent,
                canActivate: [AuthGuard, AdminGuard],
                pathMatch: "full"
            },
            {
                path: ":id",
                component: UserDetailComponent,
                canActivate: [AuthGuard, AdminGuard],
                pathMatch: "full"
            }
        ]
    },
    {
        path: "categories",
        component: CategoriesComponent,
        canActivate: [AuthGuard, AdminGuard],
        pathMatch: "full"
    },
    {
        path: "departments",
        component: DepartmentsComponent,
        canActivate: [AuthGuard, AdminGuard],
        pathMatch: "full"
    },
    {
        path: "roles",
        component: RolesComponent,
        canActivate: [AuthGuard, AdminGuard],
        pathMatch: "full"
    }
];
