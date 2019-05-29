import { YoutubeService } from '../../../../provider/youtube-service/youtube-service';

import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'page-youtube-favorite',
  templateUrl: 'youtube-favorite.html',
})
export class YoutubeFavoritePage {
	data:any=new Array();
	events: any={};
	constructor(
		public ytService:YoutubeService,
		public route: ActivatedRoute
	) {

	}

	ionViewWillEnter(){
		this.data=new Array();
		this.ytService.getAllFavorites().then(result=>{
			this.data=result;
		})
	}

	doFavorite(item){
 		this.ytService.doFavorite(item);
 		let index = this.ytService.getIndexOf(item.id.videoId,this.data);
        if(index !=-1){
          this.data.splice(index, 1);
        }
 	}

 	doClear(){
 		this.ytService.clearAllFavorite();
 		this.data=new Array();
 	}
}
