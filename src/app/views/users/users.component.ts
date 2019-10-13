import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
declare const swal: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  loading: boolean = true;
  users: User[];
  onlyActives: boolean = true;

  constructor(private userService: UserService) { }

  async ngOnInit() {
    this.loading = true;
    this.users = await this.userService.getAll();
    this.loading = false;
  }

  async changeStatus(user: User) {
    try{
      user.isActive = !user.isActive;
      await this.userService.edit(user);
    } catch(err) {
      swal("Erro", "Erro ao inativar usuário", "error");
    }
  }

}
