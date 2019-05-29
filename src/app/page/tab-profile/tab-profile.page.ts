import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AlertController, PopoverController } from '@ionic/angular';

import { PopoverViewComponent } from '../../component/popover-view/popover-view.component';
import { FirebaseAuthenticationProvider } from '../../provider/firebase/firebase-authentication';


@Component({
  selector: 'app-tab-profile',
  templateUrl: 'tab-profile.page.html',
  styleUrls: ['tab-profile.page.scss']
})
export class TabProfilePage {

	slideProfileOpts = {
	    effect: 'flip',
	    autoHeight: true,
	    speed: 1000,
    	spaceBetween: 15,
	    loop: true,
	    autoplay: {
    		delay: 5000,
  		},
  		slidesPerView: 4,
	};

	constructor(
		public popoverController: PopoverController,
		public alertController: AlertController,
		private router: Router,
		public FirebaseAuthenticationProvider: FirebaseAuthenticationProvider
	) {}

	toPresentPopover(params){
		this.presentPopover(params);
	}


	logout() {
		this.presentAlertConfirm();
	}


	async presentPopover(ev: any) {
	    const popover = await this.popoverController.create({
	      	component: PopoverViewComponent,
	      	event: ev,
	      	translucent: true
	    });
	    return await popover.present();
	}


	async presentAlertConfirm() {
	    const alert = await this.alertController.create({
	      message: 'Confirm! <strong>You are sure to sign out</strong>!!!',
	      buttons: [
	        {
	          text: 'Cancel',
	          role: 'cancel',
	          cssClass: 'secondary',
	          handler: (blah) => {
	            console.log('Confirm Cancel: blah');
	          }
	        }, {
	          text: 'Okay',
	          handler: () => {
	          	this.FirebaseAuthenticationProvider.logoutUser().then(() => {
	      			this.router.navigate(['login']);
	    		});
	            console.log('Confirm Okay');
	          }
	        }
	      ]
	    });

	    await alert.present();
	}

}
