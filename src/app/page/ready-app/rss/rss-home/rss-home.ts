
import { RssService } from '../../../../provider/rss-service/rss-service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

 @Component({
 	selector: 'page-rss-home',
 	templateUrl: 'rss-home.html',
 })
 export class RssHomePage {
 	data:Array<any>=new Array();
 	item:any;
 	spnState:string='show';

 	constructor(
 		public rssService: RssService,
 		public route: ActivatedRoute
 	) {
 		this.route.params.subscribe(params => {
	 		this.item=params;
	 		this.rssService.getPosts(this.item.link).subscribe(data=>{
	 			let json=this.rssService.convertToJson(data);
	 			json = json.rss.channel.item;
	 			this.data=json;
	 			this.spnState='hide';
	 		});
	 	})
 	}

 	ionViewDidEnter() {
 		if(this.data.length!=0){
 			for(let i = 0; i < this.data.length; i++) {
 				this.rssService.isFavorite(this.data[i]).then(result=>{
 					this.data[i].isFavorite=result;
 				})
 			}
 		}
 	}
 }
