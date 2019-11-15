import { Injectable } from '@angular/core';

import { HttpClient } from '../shared/wrappers/HttpClient';
import { Watch } from '../models/watch.model';

@Injectable()
export class WatchService {
    constructor(private httpClient: HttpClient) {}

    endPoint: String = '/watched';

    async create(watched: Watch): Promise<any> {
        return await this.httpClient.post(this.endPoint, watched);
    }

    async getWatchedCourseUser(watchedCourseUser): Promise<Watch[]> {
        let response = await this.httpClient.post(`${this.endPoint}/course-user`, watchedCourseUser);
        return response;
    }

    async getWatchedCourseUserUnit(watchedCourseUserUnit): Promise<Watch> {
        let response = await this.httpClient.post(`${this.endPoint}/course-user-unit`, watchedCourseUserUnit);
        return response;
    }
}