import { Question } from './question.model';

export class Quiz {
    _id: String;
    title: String;
    category: String = "";
    questions: Question[] = [];
}