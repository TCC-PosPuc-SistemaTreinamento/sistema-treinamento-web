import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SecurityService } from '../../services/security.service';
import { AuthService } from '../../services/auth.service';
declare const swal: any;

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    username: string = "";
    password: string = "";

    constructor(private router: Router,
        private securityService: SecurityService,
        private authService: AuthService) { }

    ngOnInit() {
    }

    async authenticate() {
        if (this.username == "" && this.password == "")
            return swal("Não foi possível fazer login.", "Insira seus dados!", "error");
        if (this.username == "")
            return swal("Não foi possível fazer login.", "Insira seu e-mail!", "error");
        if (this.password == "")
            return swal("Não foi possível fazer login.", "Insira sua senha!", "error")

        let response = await this.authService.login({
            username: this.username,
            password: this.password
        });

        if (response.success) {
            if(this.securityService.isLoggedIn()) {
                this.router.navigate(['/home']);
            }
        } else {
            console.log(response)
            const res = JSON.parse(response._body);
            return swal("Não foi possível realizar o login", res.message, "error")
        }
    }


}
