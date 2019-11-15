import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../..//environments/environment';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnInit {

  @ViewChild('iframe') iframe: ElementRef;
  material: String;
  urlCourseFile: String = environment.apiBaseUrl + '/courses/files';

  constructor(private route: ActivatedRoute) { }

  async ngOnInit() {
    this.material = this.route.snapshot.params['material'];
    console.log(this.material)
    this.iframe.nativeElement.src = this.urlCourseFile + '/' + this.material;

  }

}
