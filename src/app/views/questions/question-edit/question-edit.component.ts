import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Category } from '../../../models/category.model';
import { Quiz } from '../../../models/quiz.model';
import { Question } from 'src/app/models/question.model';
import { CategoryService } from '../../../services/category.service';
import { QuizService } from '../../../services/quiz.service';
declare const swal: any;

@Component({
  selector: 'app-question-edit',
  templateUrl: './question-edit.component.html',
  styleUrls: ['./question-edit.component.scss']
})
export class QuestionEditComponent implements OnInit {
  loading: Boolean = false;
  quiz: Quiz = new Quiz();
  categories: Category[];
  questionAux: Question = new Question();

  constructor(private categoryService: CategoryService,
              private quizService: QuizService,
              private router: Router,
              private route: ActivatedRoute) { }

  async ngOnInit() {
    this.loading = true;
    const id = this.route.snapshot.params['id'];
    this.categories = await this.categoryService.getAll();
    this.quiz = await this.quizService.getById(id);
    this.loading = false;
  }

  addQuestion(){
    const question = this.questionAux;
    this.quiz.questions.push(question);
    this.questionAux = new Question();
    console.log( this.questionAux )
  }

  removeQuestion(i){
    this.quiz.questions.splice(i, 1);
  }

  async edit(){
    const response = await this.quizService.edit(this.quiz);
    if(response._id)
      swal("Questionário atualizado com sucesso", "", "success");
    else
      swal("Erro ao atualizar o questionário", "", "error");
    this.router.navigate(['/questions']);
  }

  editQuestion(question) {
    this.questionAux.alternativeA = question.alternativeA;
    this.questionAux.alternativeB = question.alternativeB;
    this.questionAux.alternativeC = question.alternativeC;
    this.questionAux.alternativeD = question.alternativeD;
    this.questionAux.alternativeCorrect = question.alternativeCorrect;
    this.questionAux.statement = question.statement;
    console.log(this.questionAux)
  }

  resetQuestion(i){
    this.quiz.questions[i] = this.questionAux;
    this.questionAux = new Question();
  }

  cancel(){
    this.router.navigate(['/questions']);
  }

  clearQuestionAux() {
    this.questionAux = new Question();
  }

  quizInvalid() {
    if(this.quiz.title == '' || this.quiz.category == '' || this.quiz.questions.length == 0)
      return true;
    return false;
  }

}
