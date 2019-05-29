import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: 'gallery.page.html',
  styleUrls: ['gallery.page.scss']
})
export class GalleryPage {

	page_name: any;
	page_path: any;
	component_name: any;

	constructor(
		private router: Router,
		public route: ActivatedRoute
	){
		console.log('GalleryPage');

		this.route.params.subscribe(params => {
			this.page_name = params.name;
			this.page_path = params.path;

			console.log('name: ' + this.page_name + ' path: ' + this.page_path);
		})
	}


	ngOnInit() {
	}

}
