import { Component } from '@angular/core';

@Component({
	selector: 'component-slides-mold',
	templateUrl: 'slides-mold.component.html',
	styleUrls: ['slides-mold.component.scss']
})
export class SlidesMoldComponent {

	slideSloganOpts = {
	    initialSlide: 1,
	};

	slidePerViewOpts = {
	    speed: 1000,
    	spaceBetween: 16,
	    loop: true,
	    autoplay: {
		    delay: 500,
		},
  		slidesPerView: 3,
	};

	slideThumbOpts = {
	    speed: 1000,
    	spaceBetween: 16,
	};

	slideThinOpts = {
	    speed: 1000,
	    loop: true,
  		slidesPerView: 4,
	};
	
	slideFreedomOpts = {
	    speed: 1000,
    	spaceBetween: 16,
	    loop: true,
	    centeredSlides: true,
  		slidesPerView: 3,
	};

	slideCenterOpts = {
	    speed: 1000,
    	spaceBetween: 16,
	    loop: true,
  		slidesPerView: 3,
	};

	slideSideOpts = {
	    speed: 1000,
    	spaceBetween: 16,
	    loop: true,
  		slidesPerView: 3,
	};

	constructor(){ }

}
