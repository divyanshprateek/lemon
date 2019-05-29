import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-tab-home',
  templateUrl: 'tab-home.page.html',
  styleUrls: ['tab-home.page.scss']
})
export class TabHomePage {

	list_menu: any;
	slideOpts = {
	    effect: 'flip',
	    autoHeight: true,
	    speed: 1000,
    	// spaceBetween: 50,
	    loop: true,
	    autoplay: {
    		delay: 3000,
  		},
	};

	constructor(
		private router: Router
	){
		this.list_menu = environment.menu;
	}
}
