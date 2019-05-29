import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
	selector: 'component-internal',
	templateUrl: 'internal.component.html',
	styleUrls: ['internal.component.scss']
})
export class InternalComponent {

	constructor(public modalController: ModalController){ }

	dismiss(){
		this.modalController.dismiss();
	}
	
}
