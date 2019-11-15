import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DepartmentService } from '../../../services/department.service';
import { RoleService } from '../../../services/role.service';
import { UserService } from '../../../services/user.service';
import { Role } from '../../../models/role.model';
import { Department } from '../../../models/department.model';
import { User } from '../../../models/user.model';
import { CommonHelper } from '../../../shared/helpers/CommonHelper';
declare const swal: any;

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
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
              private route: ActivatedRoute,
              private commonHelper: CommonHelper) { }

  async ngOnInit() {
    this.loading = true;
    const id = this.route.snapshot.params['id'];
    this.user = await this.userService.getById(id);
    console.log(this.user)
    this.roles = await this.roleService.getAll();
    this.departments = await this.departmentService.getAll();
    this.loading = false;
  }

  async edit() {
    try{
      const response = await this.userService.edit(this.user);
      console.log(response)
      if(response._id){
        swal("Usuário editado com sucesso", "", "success")
        this.router.navigate(['/users']);
      } else {
        swal("Erro ao editar usuário", response._body, "error");
      }
    } catch(err) {
      swal("Erro", "Erro ao editar usuário", "error");
      this.router.navigate(['/users']);
    }
  }
  
  cancel(){
    this.router.navigate(['/users']);
  }

}
