import { style } from "@angular/animations";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SecurityService } from '../../services/security.service';
import { getDefaultService } from "selenium-webdriver/edge";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  private menuToggled: boolean = false;
  public loggedUser: any;
  private selectedPage;
  public homeAccess = false;
  public dashboardAccess = false;
  public myCoursesAccess = false;
  public conquestsAccess = false;
  public certificatesAccess = false;
  public questionsAccess = false;
  public suggestionsAccess = false;
  public usersAccess = false;
  public categoriesAccess = false;
  public departmentsAccess = false;
  public rolesAccess = false;

  constructor(private router: Router,
              private securityService: SecurityService) { }

  ngOnInit() {
    this.router.events.subscribe(() => {
      if(!this.securityService.getUser()){
        return this.loggedUser = null;
      }
      if (!this.loggedUser) {
        return this.getUser();
      }
      this.getPermissions();
    });
  }
  
  getUser() {
    this.loggedUser = this.securityService.getUser();
    if(this.loggedUser) {
      this.loggedUser.name = this.loggedUser.name.split(" ")[0];
    }
  }

  private getPermissions(){
    if(this.loggedUser.privilege == 'admin'){
      this.homeAccess = true;
      this.myCoursesAccess = true;
      this.conquestsAccess = true;
      this.certificatesAccess = true;
      this.suggestionsAccess = true;
      this.dashboardAccess = true;
      this.questionsAccess = true;
      this.usersAccess = true;
      this.categoriesAccess = true;
      this.departmentsAccess = true;
      this.rolesAccess = true;
    } else {
      this.homeAccess = true;
      this.myCoursesAccess = true;
      this.conquestsAccess = true;
      this.certificatesAccess = true;
      this.suggestionsAccess = true;
    }
  }

  private logOut() {
    this.securityService.clear();
    this.router.navigate(["/login"]);
  }

  private toggleMenu() {
    let menu = document.getElementById("sidemenu");
    let overlay = document.getElementById("overlay");
    if (!this.menuToggled) {
      this.menuToggled = true;
      menu.style.margin = "0";
      overlay.style.animation = "showup .35s";
      overlay.style.display = "block";
      document.body.style.overflow = "hidden";
      return;
    }
    this.menuToggled = false;
    menu.style.margin = "0 0 0 -256px";
    overlay.style.animation = "dismiss .35s";
    overlay.style.display = "none";
    document.body.style.overflow = "initial";
  }

}
