import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { Watch } from '../../../../models/watch.model';
import { WatchService } from '../../../../services/watch.service';

@Component({
  selector: 'app-unit-video',
  templateUrl: './unit-video.component.html',
  styleUrls: ['./unit-video.component.scss']
})
export class UnitVideoComponent implements OnInit {

  linkIframe: String;
  @ViewChild('srcIframe') srcIframe: ElementRef;
  @Input() unitVideos: any;
  course: String;
  user: String;
  unit: Number;
  videos: Array<any>;
  watch: Watch = new Watch();

  constructor(private bsModalRef: BsModalRef,
    private watchService: WatchService) { }

  async ngOnInit() {
    if (this.videos && this.videos.length > 0) {
      this.srcIframe.nativeElement.src = this.videos[0].url;
    }

    let response = await this.watchService.getWatchedCourseUserUnit({ course: this.course, user: this.user, unit: this.unit });
    if(response){
      this.watch.watchedVideos = response.watchedVideos;
    }
    this.watch.course = this.course;
    this.watch.user = this.user;
    this.watch.unit = this.unit; 

    for(let i=0; i<this.videos.length; i++){
      if(this.watch.watchedVideos.includes(i))
        this.videos[i].completed = true;
      else
        this.videos[i].completed = false;
    }

  }

  onClose() {
    this.bsModalRef.hide();
  }

  async changeVideo(url: String, i: Number) {
    this.srcIframe.nativeElement.src = url;

    if(!this.watch.watchedVideos.includes(i))
      await this.videoCompleted(i);
  }

  async videoCompleted(i){
    this.watch.watchedVideos.push(i);
    let res = await this.watchService.create(this.watch);
    if(res._id)
      this.videos[i].completed = true;
  }


}
