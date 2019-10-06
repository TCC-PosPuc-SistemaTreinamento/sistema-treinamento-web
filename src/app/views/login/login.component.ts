import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SecurityService } from '../../services/security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public username: string;
    public password: string;

  constructor(private router: Router,
              private securityService: SecurityService) { }

  ngOnInit() {
  }

  login(username, password){
    console.log('hfhhf')
    this.securityService.setToken('1234')
    this.router.navigate(['/course']);
  }

}
