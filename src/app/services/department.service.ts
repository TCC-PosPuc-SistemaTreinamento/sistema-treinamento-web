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
}
