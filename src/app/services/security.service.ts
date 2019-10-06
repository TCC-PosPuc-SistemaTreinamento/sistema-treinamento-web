import { Injectable } from '@angular/core';

import { LocalStorage } from '../shared/wrappers/LocalStorage';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private localStorage: LocalStorage) { }

  hasToken() {
    return (this.localStorage.retrieve('token') !== null && this.localStorage.retrieve('token') !== 'undefined');
  }

  getToken() {
    return this.localStorage.retrieve('token');
  }

  setToken(token: string) {
    this.localStorage.persist('token', token);
  }

  getUser() {
    return this.localStorage.retrieve('user');
  }

  setUset(user: string) {
    this.localStorage.persist('user', user);
  }

}
