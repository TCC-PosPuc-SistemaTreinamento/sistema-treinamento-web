import { Injectable } from '@angular/core';

import { HttpClient } from '../shared/wrappers/HttpClient';
import { Department } from '../models/department.model';

@Injectable()
export class DepartmentService {
  constructor(private httpClient: HttpClient) { }

  endPoint: String = '/departments';
  
  async getAll(): Promise<Department[]> {
    let response = await this.httpClient.get(this.endPoint);
    return response;
  }

  async create(department: Department): Promise<any> {
    return await this.httpClient.post(this.endPoint, department);
  }

  async edit(department: Department) {
      return await this.httpClient.update(this.endPoint, department._id, department);
  }

  async remove(id: String) {
    return await this.httpClient.delete(this.endPoint, id);
  }
}
