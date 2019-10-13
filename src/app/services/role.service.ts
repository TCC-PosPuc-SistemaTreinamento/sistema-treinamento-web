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
}
