import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'component-toast',
  templateUrl: 'toast.component.html',
  styleUrls: ['toast.component.scss']
})
export class ToastComponent {

	constructor( public toastController: ToastController ){ }



	toPresentToast(position){
		this.presentToast(position);
	}

	toPresentToastWithOptions(opts){
		this.presentToastWithOptions(opts);
	}


	async presentToast(position) {
      const toastElement = await this.toastController.create({
        message: 'Hellooo',
        position,
        duration: 2000
      });
      return await toastElement.present();
    }

    async presentToastWithOptions(opts) {
      const toastElement = await this.toastController.create(opts);
      return await toastElement.present();
    }
}
