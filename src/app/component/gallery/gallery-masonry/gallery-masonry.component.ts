import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GalleryModalComponent } from '../gallery-modal/gallery-modal.component';

@Component({
	selector: 'component-gallery-masonry',
	templateUrl: 'gallery-masonry.component.html',
	styleUrls: ['gallery-masonry.component.scss']
})
export class GalleryMasonryComponent {

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
