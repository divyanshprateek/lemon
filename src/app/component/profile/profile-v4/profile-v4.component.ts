import { Component } from '@angular/core';

@Component({
	selector: 'component-profile-v4',
	templateUrl: 'profile-v4.component.html',
	styleUrls: ['profile-v4.component.scss']
})
export class ProfileV4Component {

	slideBlogListOpts = {
	    effect: 'flip',
	    autoHeight: true,
	    speed: 1000,
    	spaceBetween: 5,
	    loop: true,
	};

	slideBlogListMiniOpts = {
	    effect: 'flip',
	    autoHeight: true,
	    speed: 1000,
    	spaceBetween: 5,
	    loop: true,
	};

	constructor(){ }

}
