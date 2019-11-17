import { Injectable } from '@angular/core';

import { HttpClient } from '../shared/wrappers/HttpClient';

@Injectable()
export class DashboardService {
  constructor(private httpClient: HttpClient) { }

  endPoint: String = '/dashboard';

  async get(): Promise<any> {
    let response = await this.httpClient.get(this.endPoint);
    return response;
  }
}
