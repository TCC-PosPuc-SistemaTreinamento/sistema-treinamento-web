import { Injectable } from '@angular/core';

import { HttpClient } from '../shared/wrappers/HttpClient';
import { User } from '../models/user.model';

@Injectable()
export class UserService {
    constructor(private httpClient: HttpClient) {}

    endPoint: String = "/users";
    async getAll(): Promise<User[]> {
        let response = await this.httpClient.get(this.endPoint);
        return response;
    }

    async getById(id: String): Promise<User> {
        let response = await this.httpClient.get(`${this.endPoint}/${id}`);
        return response;
    }

    async create(user: User): Promise<any> {
        return await this.httpClient.post(this.endPoint, user);
    }

    async edit(user: User): Promise<any> {
        return await this.httpClient.update(this.endPoint, user._id, user);
    }

    async getUserProgress(id: String) {
        return await this.httpClient.getById(this.endPoint, `${id}/progress`);
    }

    async getEvaluatesByUser(id: String) {
        return await this.httpClient.getById(this.endPoint, `${id}/evaluates`);
    }

    async changePassword(oldPassword: String, newPassword, userId: String): Promise<any> {
      return await this.httpClient.post(`${this.endPoint}/change-password`, { oldPassword, newPassword, userId })
    }
}
