import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { NotfoundComponent } from '../../component/error/notfound/notfound.component';
import { InternalComponent } from '../../component/error/internal/internal.component';

@Component({
	selector: 'app-error',
	templateUrl: 'error.page.html',
	styleUrls: ['error.page.scss']
})
export class ErrorPage {

	page_name: any;
	page_path: any;
	component_name: any;

	constructor(
		private router: Router,
		public route: ActivatedRoute,
		public modalController: ModalController,
	){
		console.log('ErrorPage');

		this.route.params.subscribe(params => {
			this.page_name = params.name;
			this.page_path = params.path;
			this.component_name = params.component;
			console.log('name: ' + this.page_name + ' path: ' + this.page_path);
		})
	}


	ngOnInit() {
		this.route.params.subscribe(params => {
			this.page_name = params.name;
			this.page_path = params.path;
			this.component_name = params.component;
			console.log('name: ' + this.page_name + ' path: ' + this.page_path);
		})

		console.log(this.page_name + ' hahaha');

		if(this.page_path == 'notfound'){
			this.presentModalNotfound();
		}
		if(this.page_path == 'internal'){
			this.presentModalInternal()
		}
	}

	async presentModalNotfound() {
		const modal_notfound = await this.modalController.create({
			component:NotfoundComponent
		});
		modal_notfound.onDidDismiss().then((data) => {
	      this.router.navigate(['']);
	    });
		return await modal_notfound.present();
	}

	async presentModalInternal() {
		const modal_internal = await this.modalController.create({
			component: InternalComponent
		});
		modal_internal.onDidDismiss().then((data) => {
	      this.router.navigate(['']);
	    });
		return await modal_internal.present();
	}
}
