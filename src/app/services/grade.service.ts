import { Injectable } from '@angular/core';

import { HttpClient } from '../shared/wrappers/HttpClient';
import { Grade } from '../models/grade.model';

@Injectable()
export class GradeService {
    constructor(private httpClient: HttpClient) { }

    endPoint: String = '/grades';

    async create(grade: Grade): Promise<any> {
        return await this.httpClient.post(this.endPoint, grade);
    }

    async getGradesCourseUser(gradesCourseUser): Promise<Grade[]> {
        let response = await this.httpClient.post(`${this.endPoint}/course-user`, gradesCourseUser);
        return response;
    }

    async getGradesCourseUserUnit(gradesCourseUserUnit): Promise<Grade> {
        let response = await this.httpClient.post(`${this.endPoint}/course-user-unit`, gradesCourseUserUnit);
        return response;
    }

    async removeGradesUnit(gradesCourseUnit): Promise<any> {
        let response = await this.httpClient.post(`${this.endPoint}/course-unit`, gradesCourseUnit);
        return response;
    }

}
