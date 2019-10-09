import { Injectable } from '@angular/core';

import { HttpClient } from '../shared/wrappers/HttpClient';
import { LocalStorage } from '../shared/wrappers/LocalStorage';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private endPoint = '/auth/authenticate';

  constructor(private httpClient: HttpClient,
              private localStorage: LocalStorage,
              private securityService: SecurityService) { }

  async login(login){
    const res = await this.httpClient.post(this.endPoint, login);
    if(res.success){
      this.securityService.setToken(res.user.token);
      this.securityService.setUser(res.user);
    }
    return res;
  }

  async logout(){

  }

}
