import { YoutubeService } from '../../../../provider/youtube-service/youtube-service';

import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'page-youtube-detail',
  templateUrl: 'youtube-detail.html',
})
export class YoutubeDetailPage {
  item:any={};
  constructor(
     public ytService:YoutubeService,
     public route: ActivatedRoute
   ) {
      this.route.params.subscribe(params => {
     	  this.item=params;
      })
     	console.log(this.item);
  }
}
