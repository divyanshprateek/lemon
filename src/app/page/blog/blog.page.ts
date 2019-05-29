import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: 'blog.page.html',
  styleUrls: ['blog.page.scss']
})
export class BlogPage {

	page_name: any;
	page_path: any;
	component_name: any;

	constructor(
		private router: Router,
		public route: ActivatedRoute
	){
		console.log('BlogPage');

		this.route.params.subscribe(params => {
			this.page_name = params.name;
			this.page_path = params.path;

			console.log('name: ' + this.page_name + ' path: ' + this.page_path);
		})
	}


	ngOnInit() {
	}

}
