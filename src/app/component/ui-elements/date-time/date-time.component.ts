import { Component } from '@angular/core';

@Component({
  selector: 'component-date-time',
  templateUrl: 'date-time.component.html',
  styleUrls: ['date-time.component.scss']
})
export class DateTimeComponent {

	customYearValues: any;
	customPickerOptions: any;
	customDayShortNames: any;

	constructor(){ 

		this.customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];

		this.customDayShortNames = [
		  's\u00f8n',
		  'man',
		  'tir',
		  'ons',
		  'tor',
		  'fre',
		  'l\u00f8r'
		];

		this.customPickerOptions = {
		  buttons: [{
		    text: 'Save',
		    handler: () => console.log('Clicked Save!')
		  }, {
		    text: 'Log',
		    handler: () => {
		      console.log('Clicked Log. Do not Dismiss.');
		      return false;
		    }
		  }]
		}

	}


}
