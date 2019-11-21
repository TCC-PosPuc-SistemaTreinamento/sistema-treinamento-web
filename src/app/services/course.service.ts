import { Injectable } from '@angular/core';

import { HttpClient } from '../shared/wrappers/HttpClient';
import { Upload } from '../shared/wrappers/Upload';
import { Course } from '../models/course.model';
import { Observable } from 'rxjs';

@Injectable()
export class CourseService {
    constructor(private httpClient: HttpClient,
                private upload: Upload) {}

    endPoint: String = '/courses';

    async getAll(): Promise<Course[]> {
        let response = await this.httpClient.get(this.endPoint);
        return response;
    }

    async getById(id: String): Promise<Course> {
        let response = await this.httpClient.getById(this.endPoint, id);
        return response;
    }
    
    async getByIdFull(id: String): Promise<Course> {
        let response = await this.httpClient.getById(`${this.endPoint}`, `${id}/full`);
        return response;
    }

    async create(course: Course): Promise<any> {
        return await this.httpClient.post(this.endPoint, course);
    }

    async update(course: Course): Promise<any> {
        return await this.httpClient.update(this.endPoint, course._id, course);
    }

    // async uploadFiles(files: Set<File>, id): Promise<any>{
    uploadFiles(f: any, id): any{
        const name = f.file[0].name;
        const fileName = id + '_' + f.unit + '.' + name.split('.')[name.split('.').length-1];
        const formData = new FormData();
        formData.append('file', f.file[0], fileName)
        // console.log(formData.get("file"))
        let response = this.upload.post(`${this.endPoint}/${id}/upload`, formData);
        return response;
    }

    async verifyConclusion(id: String, user): Promise<any>{
        let response = this.httpClient.post(`${this.endPoint}/${id}/conclusion`, { user } );
        return response;
    }

    async getFiles(id: String): Promise<any>{
        let response = this.upload.get(`${this.endPoint}/${id}/upload`)
        return response;
    }

    async getFile(filename: String): Promise<Observable<Object>>{
        let response = this.upload.get(`${this.endPoint}/files/${filename}`);
        return response;
    }

    // async getCapa(id: String): Promise<Observable<Object>>{
    //     let response = this.upload.get(`${this.endPoint}/${id}/capa`);
    //     return response;
    // }

    async deleteFile(id: String, filename: String): Promise<any>{
        console.log('metodo delete file')
        let response = this.upload.remove(`${this.endPoint}/${id}/file/delete`, filename);
        return response;
    }

    async createEvaluate(id: String, evaluate: any) {

      const response = await this.httpClient.post(`${this.endPoint}/${id}/evaluate`, { evaluate });
      return response;

    }
}
