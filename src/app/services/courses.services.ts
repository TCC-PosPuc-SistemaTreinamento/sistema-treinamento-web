import { Injectable } from '@angular/core';

import { HttpClient } from '../shared/wrappers/HttpClient';
import { Course } from '../models/course.model';

@Injectable()
export class CourseService {
    constructor(private httpClient: HttpClient) {}

    endPoint: String = '/courses';

    async getAll(): Promise<Course[]> {
        let response = await this.httpClient.get(this.endPoint);
        return response;
    }
}