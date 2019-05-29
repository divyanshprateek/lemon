import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-mold',
  templateUrl: 'login-mold.page.html',
  styleUrls: ['login-mold.page.scss']
})
export class LoginMoldPage {

	page_name: any;
	page_path: any;
	component_name: any;

	constructor(
		private router: Router,
		public route: ActivatedRoute
	){
		console.log('LoginMoldPage');

		this.route.params.subscribe(params => {
			this.page_name = params.name;
			this.page_path = params.path;

			console.log('name: ' + this.page_name + ' path: ' + this.page_path);
		})
	}


	ngOnInit() {
	}

}
