import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class LocalStorage {
    
    private localStorage = window.localStorage;

    clear() {
        this.localStorage.clear();
    }

    persist(key: string, item: any){
        if(!_.isEmpty(key))
            return this.localStorage.setItem(key, JSON.stringify(item));
        return this.localStorage.setItem(key, item);
    }

    retrieve(key: string): any {
        try {
            return JSON.parse(this.localStorage.getItem(key));
        } catch (err) {
            return this.localStorage.getItem(key);
        }
    }

    // save(data: any, key: string) {
    //     let item = this.retrieve(key);
    //     (_.isArray(item)) ? data.map(information => item.push(information)) : item = data;

    //     this.persist(key, item);
    //     return item;
    // }
}