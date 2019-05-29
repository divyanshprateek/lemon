import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalViewComponent } from '../../modal-view/modal-view.component';

@Component({
	selector: 'component-modal',
	templateUrl: 'modal.component.html',
	styleUrls: ['modal.component.scss']
})
export class ModalComponent {

	constructor(public modalController: ModalController){}

	toPresentModal(){
		this.presentModal();
	}

	async presentModal() {
		const modal = await this.modalController.create({
			component: ModalViewComponent,
			componentProps: { value: 123 }
		});
		return await modal.present();
	}
}
