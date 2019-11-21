import { Component, OnInit } from '@angular/core';

import { DepartmentService } from '../../services/department.service';
import { Department } from '../../models/department.model';
declare const swal: any;

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
  loading: Boolean = false;
  departments: Department[];
  department: Department = new Department();


  constructor(private departmentService: DepartmentService) { }

  async ngOnInit() {
    this.loading = true;
    this.departments = await this.departmentService.getAll();
    console.log('deps', this.departments)
    this.loading = false;
  }

  async save() {
    try{
      let response = await this.departmentService.create(this.department);
      if(response._id){
        this.department._id = response._id;
        this.departments.push(this.department);
        swal("Departamento cadastrada com sucesso", "", "success");
        this.department = new Department();
      }
    } catch(err) {
      swal("Erro", "Erro ao cadastrar departamento", "error");
    }
  }

  resetDepartment(){
    this.department = new Department();
  }

  async edit(department) {
    try{
      let response = await this.departmentService.edit(department);
      if(response._id)
        swal("Departamento atualizada com sucesso", "", "success");
    } catch(err) {
      swal("Erro", "Erro ao atualizar departamento", "error");
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
          let response = await this.departmentService.remove(id);
          if(response.success){
            this.departments.splice(this.departments.map(dept => dept._id).indexOf(id), 1);
            swal("Departamento excluido com sucesso", "", "success");
          }
        }
      });
    } catch(err){
      swal("Erro", "Erro ao excluir departamento", "error");
    }
  }

}
