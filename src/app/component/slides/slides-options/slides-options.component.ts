import { Component } from '@angular/core';

@Component({
	selector: 'component-slides-options',
	templateUrl: 'slides-options.component.html',
	styleUrls: ['slides-options.component.scss']
})
export class SlidesOptionsComponent {

	slideSpaceBetweenOpts = {
	    speed: 1000,
    	spaceBetween: 16,
	    loop: true,
	    autoplay: {
		    delay: 500,
		},
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



	slideFlipOpts = {
	    effect: 'flip',
	    speed: 1000,
	    loop: true,
	    autoplay: {
		    delay: 500,
		},
	};
	slideCubeOpts = {
	    effect: 'cube',
	    speed: 1000,
	    loop: true,
	    autoplay: {
		    delay: 500,
		},
	};
	slideFadeOpts = {
	    effect: 'fade',
	    speed: 1000,
	    loop: true,
	    autoplay: {
		    delay: 500,
		},
	};
	slideCoverflowOpts = {
	    effect: 'coverflow',
	    speed: 1000,
	    loop: true,
	    autoplay: {
		    delay: 500,
		},
	};
	slideSlideOpts = {
	    effect: 'slide',
	    speed: 1000,
	    loop: true,
	    autoplay: {
		    delay: 500,
		},
	};


	constructor(){ }

}
