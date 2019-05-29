import { Component } from '@angular/core';

@Component({
  selector: 'component-input',
  templateUrl: 'input.component.html',
  styleUrls: ['input.component.scss']
})
export class InputComponent {

	disabled: any=true;
	readonly: any=true;

	constructor(){ }

	toggleDisabled() {
		this.disabled = !this.disabled;
    	console.log('in toggleBoolean');
  	}

  	toggleReadonly(){
  		this.readonly = !this.readonly;
    	console.log('in toggleBoolean');
  	}

}
