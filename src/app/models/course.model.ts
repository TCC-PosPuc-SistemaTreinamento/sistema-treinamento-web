import { Unit } from './unit.model';

export class Course {
    _id: String;
    name: String = "";
    description: String = "";
    category: String = "";
    keyWords: String = '';
    visible: boolean = true;
    image: String = '';
    instructor: String = '';
    units: Unit[] = [];
}