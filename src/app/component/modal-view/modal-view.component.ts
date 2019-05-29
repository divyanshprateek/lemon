import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'component-modal-view',
  templateUrl: 'modal-view.component.html',
  styleUrls: ['modal-view.component.scss']
})
export class ModalViewComponent {

	constructor(public modalController: ModalController){  }

	dismiss(){
		this.modalController.dismiss();
	}

}
