import { Injectable } from '@angular/core';

import { HttpClient } from '../shared/wrappers/HttpClient';
import { Course } from '../models/course.model';

@Injectable()
export class EnrollService {
    constructor(private httpClient: HttpClient) {}

    endPoint: String = '/enroll';

    async create(enroll: any): Promise<any> {
        return await this.httpClient.post(this.endPoint, enroll);
    }

    async getCoursesByUser(id: String): Promise<any> {
        return await this.httpClient.get(`${this.endPoint}/user/${id}`);
    }
    
    async getCertificates(id: String): Promise<any> {
        return await this.httpClient.get(`${this.endPoint}/user/${id}/certificates`);
    }

    async completeCourse(courseId: String, userId: String): Promise<any> {
        return await this.httpClient.update(`${this.endPoint}/course`, courseId, { user: userId });
    }
}