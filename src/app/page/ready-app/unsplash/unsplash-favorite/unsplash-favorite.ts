import { Component } from '@angular/core';
import { UnsplashService } from '../../../../provider/unsplash-service/unsplash-service';
import { ModalController } from '@ionic/angular';

import { UnsplashModalPhotoPage } from '../unsplash-modal-photo/unsplash-modal-photo';

@Component({
	selector: 'page-unsplash-favorite',
	templateUrl: 'unsplash-favorite.html',
	styleUrls: ['unsplash-favorite.scss']
})
export class UnsplashFavoritePage {
	data:any=new Array();
	events: any={};
	constructor(
		public unsplashService:UnsplashService,
		public modalCtrl:ModalController
	) {

	}

	ionViewDidEnter(){
		this.data=new Array();
		let that=this;
		this.unsplashService.getAllFavorites().then(result=>{
			for (var i = 0; i < result.length; i++) {
				this.data.push({
					'id':result[i].id,
					'path':result[i].path,
					'title':'Photo by '+result[i].title,
					'links':result[i].links,
					'isFavorite':true
				});
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
	    modal.onDidDismiss().then((data) => {
	      this.ionViewDidEnter();
	    })
	    return await modal.present();
	}

	removeAll(){
		this.unsplashService.clearAllFavorite();
		this.data=new Array();
	}

}
