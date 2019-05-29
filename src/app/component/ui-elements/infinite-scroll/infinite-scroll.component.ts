import { Component, ViewChild } from '@angular/core';
//import { InfiniteScroll } from '@ionic/angular';

@Component({
	selector: 'component-infinite-scroll',
	templateUrl: 'infinite-scroll.component.html',
	styleUrls: ['infinite-scroll.component.scss']
})
export class InfiniteScrollComponent {

	// @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;
	// data: Array<any>;

    

	// constructor() {
	// 	this.data = [];
	// 	for (var i = 0; i < 30; i++) {
 //      		this.data.push(i + 1);
 //    	}
	// }

	// loadData(event) {
	// 	setTimeout(() => {
	// 		console.log('Done');
	// 		event.target.complete();

	// 		this.data = this.data.concat(this.data);
		    
	// 	    if (this.data.length == 1000) {
	// 	      	event.target.disabled = true;
	// 	    }
	// 	}, 500);
	// }

	// toggleInfiniteScroll() {
	// 	this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
	// }

}
