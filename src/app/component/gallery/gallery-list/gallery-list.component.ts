import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GalleryModalComponent } from '../gallery-modal/gallery-modal.component';

@Component({
	selector: 'component-gallery-list',
	templateUrl: 'gallery-list.component.html',
	styleUrls: ['gallery-list.component.scss']
})
export class GalleryListComponent {

	slideOpts = {
	    effect: 'flip',
	    autoHeight: true,
	    speed: 1000,
    	spaceBetween: 15,
	    loop: true,
	    slidesPerView: 3,
	    autoplay: {
    		delay: 5000,
  		},
	};

	constructor(public modalController: ModalController){ }

	viewImg(item){
		this.presentModal(item);
	}

	async presentModal(item) {
		const modal = await this.modalController.create({
			component: GalleryModalComponent,
			componentProps: { data_gallery: item }
		});
		return await modal.present();
	}

}
