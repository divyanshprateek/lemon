import { Component } from '@angular/core';

@Component({
	selector: 'component-blog-list',
	templateUrl: 'blog-list.component.html',
	styleUrls: ['blog-list.component.scss']
})
export class BlogListComponent {

	slideBlogListOpts = {
	    effect: 'flip',
	    autoHeight: true,
	    speed: 1000,
    	spaceBetween: 16,
	    loop: true,
  		slidesPerView: 2,
	};

	slideBlogListMiniOpts = {
	    effect: 'flip',
	    autoHeight: true,
	    speed: 1000,
    	spaceBetween: 16,
	    loop: true,
  		slidesPerView: 4,
	};

	constructor(){ }

}
