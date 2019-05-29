
import { UnsplashService } from '../../../../provider/unsplash-service/unsplash-service';

import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

import { UnsplashModalPhotoPage } from '../unsplash-modal-photo/unsplash-modal-photo';

 @Component({
 	selector: 'page-unsplash-category-detail',
 	templateUrl: 'unsplash-category-detail.html',
 	styleUrls: ['unsplash-category-detail.scss']
 })
 export class UnsplashCategoryDetailPage {
 	collectionId:number;
 	data:any=new Array();
 	events: any={};
 	page:number=0;
 	per_page:number=20;
 	collection_name:string='';
 	spnState:string='show';

 	constructor(
 		public modalCtrl:ModalController,
 		public unsplashService:UnsplashService,
 		public route: ActivatedRoute
 	) {
 		this.route.params.subscribe(params => {
			this.collectionId=params.id;
 			this.collection_name=params.collection_name;
 			this.loadMore();
		})
 	}

 	loadMore(infiniteScroll:any=null){
 		this.page+=1;
 		this.unsplashService.getPhotosByCollection(this.collectionId,this.page,this.per_page).subscribe(data=>{
 			for (var i = 0; i < data.length; i++) {
 				this.data.push({
 					'id':data[i].id,
 					'path':data[i].urls.regular,
 					'title':'Photo by '+data[i].user.name
 				});
 			}
 			this.spnState='hide';
 			if(infiniteScroll){
 				infiniteScroll.complete();
 			}
 		},error=>{
 			this.spnState='hide';
 			if(infiniteScroll!=null){
 				infiniteScroll.enable(false);
 			}
 		})
 	}

 	openModal(item){
 		this.presentModal(item);
 	}

 	async presentModal(item) {
	    const modal = await this.modalCtrl.create({
	      component: UnsplashModalPhotoPage,
	      componentProps: { data: item }
	    });
	    return await modal.present();
	}
 }
