import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { SecurityService } from '../services/security.service'; 

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
                private securityService: SecurityService){}

    canActivate() {
        if(this.securityService.isLoggedIn()){
            return true;
        } else {
            this.router.navigate(['/login'])
            return false;
        }
    }
}