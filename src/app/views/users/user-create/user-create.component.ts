import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DepartmentService } from '../../../services/department.service';
import { RoleService } from '../../../services/role.service';
import { UserService } from '../../../services/user.service';
import { Role } from '../../../models/role.model';
import { Department } from '../../../models/department.model';
import { User } from '../../../models/user.model';
import { CommonHelper } from '../../../shared/helpers/CommonHelper';
declare const swal: any;

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  loading: boolean = true;
  roles: Role[];
  departments: Department[];
  user: User = new User();
  datePickerOptions = this.commonHelper.getDatePickerOptions();
  datePattern = /^(0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).[0-9]{4}$/i;

  constructor(private roleService: RoleService,
              private departmentService: DepartmentService,
              private userService: UserService,
              private router: Router,
              private commonHelper: CommonHelper) { }

  async ngOnInit() {
    this.loading = true;
    this.roles = await this.roleService.getAll();
    this.departments = await this.departmentService.getAll();
    this.loading = false;
  }

  clear() {
    this.user = new User();
  }

  async save() {
    try{
      let response = await this.userService.create(this.user);
      if(response._id) {
        swal("Usuário cadastrado com sucesso", "", "success");
        this.clear();
      } else {
        swal("Erro ao cadastrar usuário", response._body, "error");
      }
    } catch(err) {
      swal("Erro", "Erro ao cadastrar usuário", "error");
      this.router.navigate(['/users']);
    }
  }

  verifyDate(date,field){
    if(!(new RegExp(this.datePattern).test(date))){
        swal("Data inválida!", "Digite uma data válida.", "error");
        this.user[`${field}`] = "";
    }
  }

}
