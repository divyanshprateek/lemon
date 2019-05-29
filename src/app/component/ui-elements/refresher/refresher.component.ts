import { Component } from '@angular/core';

@Component({
	selector: 'component-refresher',
	templateUrl: 'refresher.component.html',
	styleUrls: ['refresher.component.scss']
})
export class RefresherComponent {


	constructor(){}

	doRefresh(event) {
		console.log('Begin async operation');

		setTimeout(() => {
			console.log('Async operation has ended');
			event.target.complete();
		}, 2000);
	}
}
