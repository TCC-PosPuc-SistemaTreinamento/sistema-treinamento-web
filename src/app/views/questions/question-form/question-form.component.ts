import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/models/question.model';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {

  @Input('question') q;
  question: Question;

  constructor() { }

  ngOnInit() {
    this.question = this.q;
  }

  addQuestion(){}

  questionInvalid(){
    if(this.question.statement == '' || this.question.alternativeA == '' || 
      this.question.alternativeB == '' ||
      this.question.alternativeC == '' ||
      this.question.alternativeD == '')
      return true;
    return false;                       
  }

}
