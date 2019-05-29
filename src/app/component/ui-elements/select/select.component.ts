import { Component } from '@angular/core';

@Component({
  selector: 'component-select',
  templateUrl: 'select.component.html',
  styleUrls: ['select.component.scss']
})
export class SelectComponent {

	customAlertOptions: any;
	customPopoverOptions: any;
	customActionSheetOptions: any;

	constructor(){
		this.customAlertOptions = {
		    header: 'Pizza Toppings',
		    subHeader: 'Select your toppings',
		    message: '$1.00 per topping',
		    translucent: true
		};

		this.customPopoverOptions = {
		    header: 'Hair Color',
		    subHeader: 'Select your hair color',
		    message: 'Only select your dominant hair color'
		};

		this.customActionSheetOptions = {
		    header: 'Colors',
		    subHeader: 'Select your favorite color'
		};
	}
}
