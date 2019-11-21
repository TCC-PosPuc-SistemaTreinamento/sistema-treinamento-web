import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CourseService } from '../../../../services/course.service';
import { SecurityService } from '../../../../services/security.service';

declare const swal: any;

@Component({
  selector: 'app-modal-evaluation',
  templateUrl: './modal-evaluation.component.html',
  styleUrls: ['./modal-evaluation.component.scss']
})
export class ModalEvaluationComponent implements OnInit {
  evaluation: number = 0;
  comment: String = '';
  courseId: String;
  userId: String;
  loggedUser: any;

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
    private securityService: SecurityService,
  ) { }

  ngOnInit() {
    this.courseId = this.route.snapshot.params['id'];
    this.loggedUser = this.securityService.getUser();
    this.userId = this.loggedUser.id;
  }

  async onEvaluate(){

    if(this.evaluation == 0)
      swal("Você deve avaliar o curso com uma nota de 1 a 5", "", "error");
    else{
        try{
          const res = await this.courseService.createEvaluate(this.courseId, {
            userId: this.userId,
            comment: this.comment,
            rating: this.evaluation,
          });

          if (res !== null) {
            swal("Parabéns!", "Sua avaliação foi realizada com sucesso", "success");
          } else {
            swal("Você já avaliou o curso!", "", "error");
          }

      } catch (error) {
        swal("Ocorreu algum erro ao salvar a avaliação!", "", "error");
      }
    }
    this.evaluation = 0;
    this.comment = '';
  }

}
