import { Answer } from './answer.model';

export class Grade {
    _id: String;
    user: String = "";
    course: String = "";
    unit: Number = 0;
    grade: Number = 0;
    answers: Answer[];
}