import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'component-loading',
  templateUrl: 'loading.component.html',
  styleUrls: ['loading.component.scss']
})
export class LoadingComponent {

	constructor(public loadingController: LoadingController){ }

	toPresentLoading(){
		this.presentLoading();
	}

	toPresentLoadingWithOptions(opts){
		console.log(opts);
		this.presentLoadingWithOptions(opts);
	}

	async presentLoading() {
   const loadingElement = await this.loadingController.create({
     message: 'Hellooo',
     duration: 2000
   });
   return await loadingElement.present();
  }

  async presentLoadingWithOptions(opts) {
    console.log(opts);
    const loadingElement = await this.loadingController.create({
      message: opts.message,
      duration: opts.duration,
      spinner: opts.spinner,
      translucent: opts.translucent,
      cssClass: opts.cssClass
    });
    return await loadingElement.present();
  }


}
