import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-drop-drag',
  templateUrl: 'drop-drag.page.html',
  styleUrls: ['drop-drag.page.scss']
})
export class DropDragPage {

	index_menu: any;
	page_name: any;
	page_path: any;
	component_name: any;

	constructor(
		private router: Router,
		public route: ActivatedRoute
	){
		console.log('DropDragPage');

		this.route.params.subscribe(params => {
			this.index_menu = params.index;
			this.page_name = environment.menu[this.index_menu].name;
			this.page_path = environment.menu[this.index_menu].path;
			console.log('name: ' + this.page_name + ' path: ' + this.page_path);
		})
	}


	ngOnInit() {
	}

}
