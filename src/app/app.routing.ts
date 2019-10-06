import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AuthGuard } from './shared/AuthGuard';
import { LoginComponent } from './views/login/login.component';
import { CoursesComponent } from './views/courses/courses.component';
import { CourseCreateComponent } from './views/courses/course-create/course-create.component';
import { CourseDetailComponent } from './views/courses/course-detail/course-detail.component';
import { CourseEditComponent } from './views/courses/course-edit/course-edit.component';
import { RecoveryPasswordComponent } from './views/recovery-password/recovery-password.component';

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
        path: "password/forgot",
        component: RecoveryPasswordComponent,
        pathMatch: "full"
    },
    {
        path: "course",
        children: [
            {
                path: "",
                component: CoursesComponent,
                canActivate: [AuthGuard],
                pathMatch: "full"
            },
            {
                path: "new",
                component: CourseCreateComponent,
                canActivate: [AuthGuard],
                pathMatch: "full"
            },
            {
                path: "course-edit/:id",
                component: CourseEditComponent,
                canActivate: [AuthGuard],
                pathMatch: "full"
            }
        ]
    }
];

// export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);