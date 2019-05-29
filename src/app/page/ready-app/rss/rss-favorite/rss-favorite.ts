
import { RssService } from '../../../../provider/rss-service/rss-service';

import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'page-rss-favorite',
  templateUrl: 'rss-favorite.html',
})
export class RssFavoritePage {
 	data:any=new Array();
	
	constructor(
		public rssService:RssService,
		public route: ActivatedRoute
	) {
		this.route.params.subscribe(params => {
			
		})
	}

	ionViewDidEnter(){
		this.data=new Array();
		this.rssService.getAllFavorites().then(result=>{
			this.data=result;
			console.log(this.data);
		})
	}

	doFavorite(item){
 		this.rssService.doFavorite(item);
 		let index = this.rssService.getIndexOf(item.link,this.data);
        if(index !=-1){
          this.data.splice(index, 1);
        }
 	}

 	doClear(){
 		this.rssService.clearAllFavorite();
 		this.data=new Array();
 	}

}
