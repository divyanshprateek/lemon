import { Component } from '@angular/core';
import { UnsplashService } from '../../../../provider/unsplash-service/unsplash-service';

 @Component({
 	selector: 'page-unsplash-collection',
 	templateUrl: 'unsplash-collection.html',
 	styleUrls: ['unsplash-collection.scss']
 })
 export class UnsplashCollectionPage {
 	list:any=new Array();
 	page:number=0;
 	per_page:number=20;
 	spnState:string='show';

 	constructor(
 		public unsplashService:UnsplashService
 	) {
 		
 	}

 	loadMore(infiniteScroll:any=null){
 		this.page+=1;
 		this.unsplashService.getCollections(this.page,this.per_page).subscribe(data=>{
 			this.list=this.list.concat(data);
 			if(infiniteScroll){
 				infiniteScroll.complete();
 			}
 			  this.spnState='hide';
 		},error=>{
 			if(infiniteScroll!=null){
 				infiniteScroll.enable(false);
 			}
 			this.spnState='hide';
 		})
 	}

 	ionViewWillEnter() {
 		this.loadMore();
 	}

 	// detail(item){
 	// 	console.log(item.id);
 	// 	this.navCtrl.push('UnsplashCategoryDetailPage',{id:item.id,collection_name:item.title});
 	// }
 }
