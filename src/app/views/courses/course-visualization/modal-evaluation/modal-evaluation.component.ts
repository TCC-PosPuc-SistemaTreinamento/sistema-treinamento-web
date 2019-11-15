import { Component, OnInit } from '@angular/core';

declare const swal: any;

@Component({
  selector: 'app-modal-evaluation',
  templateUrl: './modal-evaluation.component.html',
  styleUrls: ['./modal-evaluation.component.scss']
})
export class ModalEvaluationComponent implements OnInit {
  evaluation: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onEvaluate(){
    if(this.evaluation == 0)
      swal("Você deve avaliar o curso com uma nota de 1 a 5", "", "error");
    else{
      swal("Parabéns!", "Sua avaliação foi realizada com sucesso", "success");
      console.log(this.evaluation)
    }
    this.evaluation = 0;
  }

}
