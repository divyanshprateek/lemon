import { Component } from '@angular/core';

@Component({
	selector: 'component-profile-v3',
	templateUrl: 'profile-v3.component.html',
	styleUrls: ['profile-v3.component.scss']
})
export class ProfileV3Component {

	slideBlogListMiniOpts = {
	    effect: 'flip',
	    autoHeight: true,
	    speed: 1000,
    	spaceBetween: 16,
	    loop: true,
  		slidesPerView: 3,
	};

	constructor(){ }

}
