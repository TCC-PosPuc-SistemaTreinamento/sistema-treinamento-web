import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { Grade } from '../../../../models/grade.model';
import { GradeService } from '../../../../services/grade.service';
declare const swal: any;

@Component({
  selector: 'app-modal-quiz',
  templateUrl: './modal-quiz.component.html',
  styleUrls: ['./modal-quiz.component.scss']
})
export class ModalQuizComponent implements OnInit {
  
  @Input() quiz: any;
  grade = new Grade();
  course: String;
  user: String;
  unit: Number;
  questions: any;
  gradeN = 0;

  constructor(private bsModalRef: BsModalRef,
              private gradeService: GradeService) {}
  
  ngOnInit() { }

  onClose(){
    this.bsModalRef.hide();
  }

  async onSubmit(form) {
    let answers = [];

    for(let index in this.questions){
      
      const ans = parseInt(form.value[`question-${index}`]);
      let answer = {
        statement: this.questions[index].statement,
        answerCorrect: this.questions[index][`alternative${this.getLetter(this.questions[index].alternativeCorrect)}`],
        answerUser: this.questions[index][`alternative${this.getLetter(ans)}`],
        correct: this.questions[index].alternativeCorrect == ans ? true : false
      };
      
      if(this.questions[index].alternativeCorrect == ans){
        answer.correct = true;
        this.gradeN++;
      } else {
        answer.correct = false;
      }

      answers.push(answer);
    }

    this.grade.course = this.course
    this.grade.user = this.user
    this.grade.unit = this.unit
    this.grade.answers = answers
    this.grade.grade = this.gradeN / this.questions.length * 100;

    let response = await this.gradeService.create(this.grade);
    if(response._id)
      swal('Parabéns!', 'Suas respostas foram enviadas com sucesso', 'success');
    else
      swal('Erro!', 'Erro ao gravar as respostas do quiz', 'error');
    this.bsModalRef.hide();
  }

  getLetter(num){
    switch(num){
      case 1: return 'A';
      case 2: return 'B';
      case 3: return 'C';
      case 4: return 'D';
      default: return '';
    }
  }

}
