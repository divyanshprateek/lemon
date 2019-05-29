import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
	selector: 'component-notfound',
	templateUrl: 'notfound.component.html',
	styleUrls: ['notfound.component.scss']
})
export class NotfoundComponent {

	constructor(public modalController: ModalController){ }

	dismiss(){
		this.modalController.dismiss();
	}
	
}
