import { Injectable } from '@angular/core';

import { HttpClient } from '../shared/wrappers/HttpClient';
import { Category } from '../models/category.model';

@Injectable()
export class CategoryService {
    constructor(private httpClient: HttpClient) {}

    endPoint: String = '/categories';

    async getAll(): Promise<Category[]> {
        let response = await this.httpClient.get(this.endPoint);
        return response;
    }

    async create(category: Category): Promise<any> {
        return await this.httpClient.post(this.endPoint, category);
    }

    async edit(category: Category) {
        return await this.httpClient.update(this.endPoint, category._id, category);
    }
}