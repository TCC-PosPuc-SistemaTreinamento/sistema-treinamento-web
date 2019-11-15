import { Injectable } from '@angular/core';

import { Quiz } from '../models/quiz.model';
import { HttpClient } from '../shared/wrappers/HttpClient';

@Injectable()
export class QuizService {
    constructor(private httpClient: HttpClient) {}

    endPoint: String = '/quizzes';

    async getAll(): Promise<Quiz[]> {
        let response = await this.httpClient.get(this.endPoint);
        return response;
    }

    async getById(id: String): Promise<Quiz> {
        let response = await this.httpClient.getById(this.endPoint, id);
        return response;
    }

    async create(quiz: Quiz): Promise<any> {
        return await this.httpClient.post(this.endPoint, quiz);
    }

    async edit(quiz: Quiz) {
        return await this.httpClient.update(this.endPoint, quiz._id, quiz);
    }

}