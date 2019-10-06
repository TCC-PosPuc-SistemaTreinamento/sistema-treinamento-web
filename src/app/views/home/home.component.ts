import { style } from "@angular/animations";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private menuToggled: boolean = false;
  public loggedUser: any;
  private selectedPage;
  public eventsAccess = false;
  public homeAccess = false;
  public categoriesAccess = false;
  public contentsAccess = false;
  public departmentsAccess = false;
  public quizzesAccess = false;
  public rolesAccess = false;
  public suggestionAccess = false;
  public sectorSuggestionsAccess = false;
  public tagAccess = false;
  public userAccess = false;
  public superAdmin = false;
  public isAdministrator = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.enableTeste();
  }

  enableTeste(){
    this.eventsAccess = true;
    this.homeAccess = true;
    this.categoriesAccess = true;
    this.contentsAccess = true;
    this.departmentsAccess = true;
    this.quizzesAccess = true;
    this.rolesAccess = true;
    this.suggestionAccess = true;
    this.sectorSuggestionsAccess = true;
    this.tagAccess = true;
    this.userAccess = true;
    this.superAdmin = true;
    this.isAdministrator = true;
  }

  private logOut() {
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

  private choosePage(button) {
    console.log('escolheu a pagina: ', button)
  }

  private suggestionPage() {
    //this.router.navigate(["suggestions"]);
    console.log('sugestão')
  }

}
