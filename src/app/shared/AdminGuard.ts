import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { SecurityService } from '../services/security.service'; 
declare const swal: any;

@Injectable()
export class AdminGuard implements CanActivate {

    constructor(private router: Router,
                private securityService: SecurityService){}

    canActivate() {
        const user = this.securityService.getUser(); 
        if(user.privilege == 'admin')
            return true;
        else{
            swal("Você não tem permissão para acessar esta página", "", "error");
            this.router.navigate(['/home']);
            return false;
        }
    }
}