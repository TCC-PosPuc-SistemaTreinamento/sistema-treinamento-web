import { Injectable } from '@angular/core';

import { HttpClient } from '../shared/wrappers/HttpClient';
import { Role } from '../models/role.model';

@Injectable()
export class RoleService {
  constructor(private httpClient: HttpClient) { }

  endPoint: String = '/roles';

  async getAll(): Promise<Role[]> {
    let response = await this.httpClient.get(this.endPoint);
    return response;
  }

  async create(role: Role): Promise<any> {
    return await this.httpClient.post(this.endPoint, role);
  }

  async edit(role: Role) {
      return await this.httpClient.update(this.endPoint, role._id, role);
  }

  async remove(id: String) {
    return await this.httpClient.delete(this.endPoint, id);
  }
}
