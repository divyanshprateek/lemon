import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ui-elements',
  templateUrl: 'ui-elements.page.html',
  styleUrls: ['ui-elements.page.scss']
})
export class UiElementsPage {

	page_name: any;
	page_path: any;
	component_name: any;

	constructor(
		private router: Router,
		public route: ActivatedRoute
	){
		console.log('UiElementsPage');

		this.route.params.subscribe(params => {
			this.page_name = params.name;
			this.page_path = params.path;

			console.log('name: ' + this.page_name + ' path: ' + this.page_path);
		})
	}


	ngOnInit() {

	}

}
