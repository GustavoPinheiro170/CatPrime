import { Component, Input, OnInit } from '@angular/core';
import { LayoutService } from '../../layout.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  
  splitUrl : any;
  id: number = 1;
  params: any;
  videoUrl: string = '';
  width = window.innerWidth
  height = window.innerHeight

  constructor(private service: LayoutService) { }

  ngOnInit(): void {
    this.getUrlId();
    this.service.getAnyFilme(this.splitUrl[this.id]).subscribe((item: any) => { 
      return ( 
      this.params = item,
      this.videoUrl = item[0].video
      ) })
  }

  getUrlId() {
   const url = window.location.href;
   this.splitUrl = url.split('/')
   this.id = this.splitUrl.length - 1
  }

}
