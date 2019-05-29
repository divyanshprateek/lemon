import { Component } from '@angular/core';

@Component({
	selector: 'component-blog-timeline',
	templateUrl: 'blog-timeline.component.html',
	styleUrls: ['blog-timeline.component.scss']
})
export class BlogTimelineComponent {

	slideTimelineOpts = {
	    effect: 'flip',
	    autoHeight: true,
	    speed: 1000,
    	spaceBetween: 16,
	    loop: true,
  		slidesPerView: 4,
	};

	constructor(){ }

}
