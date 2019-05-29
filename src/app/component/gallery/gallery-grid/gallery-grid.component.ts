import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GalleryModalComponent } from '../gallery-modal/gallery-modal.component';

@Component({
	selector: 'component-gallery-grid',
	templateUrl: 'gallery-grid.component.html',
	styleUrls: ['gallery-grid.component.scss']
})
export class GalleryGridComponent {

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
