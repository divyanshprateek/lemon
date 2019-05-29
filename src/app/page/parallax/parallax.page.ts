import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parallax',
  templateUrl: 'parallax.page.html',
  styleUrls: ['parallax.page.scss']
})
export class ParallaxPage {

	page_name: any;
	page_path: any;
	component_name: any;

	constructor(
		private router: Router,
		public route: ActivatedRoute
	){
		console.log('ParallaxPage');

		this.route.params.subscribe(params => {
			this.page_name = params.name;
			this.page_path = params.path;

			console.log('name: ' + this.page_name + ' path: ' + this.page_path);
		})
	}


	ngOnInit() {
	}

}
