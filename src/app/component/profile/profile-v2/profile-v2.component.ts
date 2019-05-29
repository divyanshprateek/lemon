import { Component } from '@angular/core';

@Component({
	selector: 'component-profile-v2',
	templateUrl: 'profile-v2.component.html',
	styleUrls: ['profile-v2.component.scss']
})
export class ProfileV2Component {

	slideBlogListOpts = {
	    effect: 'flip',
	    autoHeight: true,
	    speed: 1000,
    	spaceBetween: 16,
	    loop: true,
  		slidesPerView: 3,
	};

	slideBlogListMiniOpts = {
	    effect: 'flip',
	    autoHeight: true,
	    speed: 1000,
    	spaceBetween: 16,
	    loop: true,
  		slidesPerView: 2,
	};

	constructor(){ }

}
