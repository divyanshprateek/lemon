import { Component } from '@angular/core';

@Component({
	selector: 'component-parallax-cover',
	templateUrl: 'parallax-cover.component.html',
	styleUrls: ['parallax-cover.component.scss']
})
export class ParallaxCoverComponent {

	slideMiniOpts = {
	    effect: 'flip',
	    autoHeight: true,
	    speed: 1000,
    	spaceBetween: 16,
	    loop: true,
  		slidesPerView: 5,
	};

	constructor(){ }

}
