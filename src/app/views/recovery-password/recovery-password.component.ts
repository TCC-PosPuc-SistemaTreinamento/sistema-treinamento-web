import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.scss']
})
export class RecoveryPasswordComponent implements OnInit {

  password: String = "";
  confirmPassword: String = "";
  isSavingPassword: boolean = false;
  origin: String = "";

  constructor() { }

  ngOnInit() {
  }

  updateUserPassword(a, b){

  }

}
