import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conquests',
  templateUrl: './conquests.component.html',
  styleUrls: ['./conquests.component.scss']
})
export class ConquestsComponent implements OnInit {
  loading: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
