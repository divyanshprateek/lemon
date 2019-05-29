
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UnsplashService } from '../../../provider/unsplash-service/unsplash-service';
import { UnsplashModalPhotoPage } from './unsplash-modal-photo/unsplash-modal-photo';
import { Router, ActivatedRoute } from '@angular/router';

import { environment } from '../../../../environments/environment';

@Component({
	selector: 'page-unsplash',
	templateUrl: 'unsplash.html',
	styleUrls: ['unsplash.scss']
})
export class UnsplashPage {

	data:any=new Array();
	page:number=0;
 	per_page:number=20;
 	spnState:string='show';

	index_menu: any;
	page_name: any;
	page_path: any;
	component_name: any;

	query: string = null;

	constructor(
		public route: ActivatedRoute,
		public modalCtrl: ModalController,
 		public unsplashService: UnsplashService
	) {
		this.route.params.subscribe(params => {
			this.index_menu = params.index;
			this.page_name = environment.menu[this.index_menu].name;
			this.page_path = environment.menu[this.index_menu].path;
			console.log('name: ' + this.page_name + ' path: ' + this.page_path);
		})

		this.loadMore();
	}

	onInput(){
 		this.page=0;
 		this.data=[];
 		this.spnState='show';
 		this.loadMore();
 	}

	loadMore(infiniteScroll:any=null){
		console.log(this.query);

		if(this.query == null || this.query == '' || this.query == ' ' || this.query == undefined){
	 		this.page+=1;
	 		this.unsplashService.getPhotos(this.page,this.per_page).subscribe(data=>{
	 			for (var i = 0; i < data.length; i++) {
	 				this.data.push({
	 					'id':data[i].id,
	 					'path':data[i].urls.regular,
	 					'title':'<span class="photo-by">Photo by</span>&nbsp;<strong>'+data[i].user.name+'</strong>',
	 					'links':data[i].links
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
	 	if(this.query != null && this.query != '' && this.query != ' ' && this.query != undefined){
	 		this.page+=1;
	 		this.unsplashService.searchPhotos(this.query,this.page,this.per_page).subscribe(data=>{
	 			for (var i = 0; i < data.results.length; i++) {
	 				this.data.push({
	 					'path':data.results[i].urls.regular,
	 					'title':'Photo by '+data.results[i].user.name
	 				});
	 			}
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
