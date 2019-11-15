import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Quiz } from '../../models/quiz.model';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  // quizzes = [{
  //   _id: 1,
  //   title: 'Introdução a informatica',
  //   category: 'TI',
  //   questions: [
  //     { question: 1 },
  //     { question: 2 },
  //     { question: 3 }
  //   ]
  // }]
  quizzes: Quiz[];

  constructor(private quizService: QuizService,
              private router: Router) { }

  async ngOnInit() {
    this.quizzes = await this.quizService.getAll();
  }

  removeQuiz(id){}

}
