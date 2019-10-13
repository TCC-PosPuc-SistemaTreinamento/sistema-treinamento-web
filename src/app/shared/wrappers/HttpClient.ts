import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { LocalStorage } from '../wrappers/LocalStorage';

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/toPromise';
// import 'rxjs/add/observable/throw';

@Injectable()
export class HttpClient {

    baseUrl: string = environment.apiBaseUrl;
    headers: Headers;
    options: RequestOptions;
    authToken: string = ""; 
    
    constructor(private http: Http,
                private localStorage: LocalStorage) {}

    getHeaders() {
        this.authToken = this.getToken();
        // this.headers = this.authToken !== null ? new Headers({ 'Authorization': 'Bearer ' + this.authToken }) : new Headers({});
        this.headers = this.authToken !== null ? new Headers({ 'x-access-token': this.authToken }) : new Headers({});
        this.headers.append('Content-Type', 'application/json');
        this.options = new RequestOptions({ headers: this.headers });
        return this.options;
    }

    getToken(): string {
        const userFromLocalStorage = this.localStorage.retrieve('token');
        if(userFromLocalStorage !== null)
            return userFromLocalStorage;
        return null;
    }

    get(endPoint: String, filter: String = '') {
        const headers = this.getHeaders();
        return this.http
          .get(this.baseUrl + endPoint + filter, headers)
          .pipe(map(r => r.json()))
          .toPromise()
          .catch((error: any) => error.json() || 'Server error');
    }
    
      getById(endPoint: String, id: String) {
        const headers = this.getHeaders();
        return this.http
          .get(this.baseUrl + endPoint + '/' + id, headers)
          .pipe(map(r => r.json()))
          .toPromise()
          .catch((error: any) => error.json() || 'Server error');
      }
    
      update(endPoint: String, id, body) {
        const headers = this.getHeaders();
        return this.http
          .put(this.baseUrl + endPoint + '/' + id, JSON.stringify(body), headers)
          .pipe(map(r => r.json()))
          .toPromise()
          .catch((error: any) => error.json() || 'Server error');
      }
    
      post(endPoint: String, body) {
        const headers = this.getHeaders();
        return this.http
          .post(this.baseUrl + endPoint, JSON.stringify(body), headers)
          .pipe(map(r => r.json()))
          .toPromise()
          .catch((error: any) => error || 'Server error');
      }
    
      patch(endPoint: String, body) {
        const headers = this.getHeaders();
        return this.http
          .patch(this.baseUrl + endPoint, JSON.stringify(body), headers)
          .pipe(map(r => r.json()))
          .toPromise()
          .catch((error: any) => error.json() || 'Server error');
      }
    
      delete(endPoint: String, id: String) {
        const headers = this.getHeaders();
        return this.http
          .delete(this.baseUrl + endPoint + '/' + id, headers)
          .pipe(map(r => r.json()))
          .toPromise()
          .catch((error: any) => error.json() || 'Server error');
      }

}