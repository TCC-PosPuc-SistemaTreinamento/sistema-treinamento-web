import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { LocalStorage } from '../wrappers/LocalStorage';

import { HttpRequest, HttpClient, HttpHeaders } from '@angular/common/http';

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/toPromise';
// import 'rxjs/add/observable/throw';

@Injectable({
    providedIn: 'root'
})
export class Upload {

    baseUrl: string = environment.apiBaseUrl;
    headers: any;
    options: RequestOptions;
    authToken: string = ""; 
    
    constructor(private http: HttpClient,
        private localStorage: LocalStorage) {}

    getHeaders() {
        this.authToken = this.getToken();
        const httpOptions = {
            headers: this.authToken !== null ? new HttpHeaders({ 
                'x-access-token': this.authToken
            }) : new HttpHeaders({})
        }
        return httpOptions;        
    }

    getToken(): string {
        const userFromLocalStorage = this.localStorage.retrieve('token');
        if(userFromLocalStorage !== null)
            return userFromLocalStorage;
        return null;
    }

    get(endPoint: String) {
        const options = this.getHeaders();
        return this.http.get(this.baseUrl + endPoint, options)
    }
    
    post(endPoint: String, formData) {
        const options = this.getHeaders();
        return this.http.post( this.baseUrl + endPoint, formData, options)
    }
}