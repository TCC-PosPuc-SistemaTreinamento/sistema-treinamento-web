import { Component, OnInit } from '@angular/core';

import { RoleService } from '../../services/role.service';
import { Role } from '../../models/role.model';
declare const swal: any;

@Component({
  selector: 'app-departments',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  loading: Boolean = false;
  roles: Role[];
  role: Role = new Role();


  constructor(private roleService: RoleService) { }

  async ngOnInit() {
    this.loading = true;
    this.roles = await this.roleService.getAll();
    console.log('deps', this.roles)
    this.loading = false;
  }

  async save() {
    try{
      let response = await this.roleService.create(this.role);
      if(response._id){
        this.role._id = response._id; 
        this.roles.push(this.role);
        swal("Cargo cadastrado com sucesso", "", "success");
        this.role = new Role();
      }
    } catch(err) {
      swal("Erro", "Erro ao cadastrar cargo", "error");
    }
  }

  async edit(role) {
    try{
      let response = await this.roleService.edit(role);
      if(response._id)
        swal("Cargo atualizada com sucesso", "", "success");
      } catch(err) {
        swal("Erro", "Erro ao atualizar cargo", "error");
      }
    }
    
    async remove(id){
      try{
        swal({
          title: "Você tem certeza?",
          text: "O departamento será excluído permanentemente",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then( async (willDelete) => {
          if (willDelete) {
            let response = await this.roleService.remove(id);
            if(response.success){
              this.roles.splice(this.roles.map(role => role._id).indexOf(id), 1);
              swal("Cargo excluido com sucesso", "", "success");
            }
          }
        });  
    } catch(err){
      swal("Erro", "Erro ao excluir cargo", "error");
    }
  }

}
