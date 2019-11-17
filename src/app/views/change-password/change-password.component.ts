import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../../models/user.model';
import { SecurityService } from '../../services/security.service';
import { UserService } from '../../services/user.service';
declare const swal: any;

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  loading: boolean = false;
  user: User = new User();
  newPassword: String = '';
  confirmNewPassword: String = '';

  constructor(
    private route: ActivatedRoute,
    private securityService: SecurityService,
    private userService: UserService,
  ) { }

  ngOnInit() {}

  async edit() {

    if (this.newPassword !== this.confirmNewPassword ) {
      swal("Erro!", "Senhas diferentes", "error");
      return;
    }

    try {
      const loggedUser = await this.securityService.getUser();

      if (loggedUser) {
        const response = await this.userService.changePassword(
          this.user.password,
          this.newPassword,
          loggedUser.id
        );

        if(response.id) {
          swal("Sucesso!", "Senha cadastrada com sucesso!", "success");
        } else {
          swal("Erro!", "Não foi possível atualizar a senha", "error");
        }
      }

    } catch(error) {
      swal("Error!", error.message, "error")
    }

    this.user.password = '';
    this.newPassword = '';
    this.confirmNewPassword = '';
  }
}
