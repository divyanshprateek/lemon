import { Component } from '@angular/core';

@Component({
  selector: 'component-range',
  templateUrl: 'range.component.html',
  styleUrls: ['range.component.scss']
})
export class RangeComponent {

	progress: number = 10;
	brightness: number = 20;
	contrast: number = 30;

	disabled: any = true;

	constructor(){ }
    
    increaseRangeValues() {
    	this.progress = (this.progress < 100) ? (this.progress + 10) : (this.progress = 10);
    	this.brightness = (this.brightness < 100) ? (this.brightness + 10) : (this.brightness = 10);
    	this.contrast = (this.contrast < 100) ? (this.contrast + 10) : (this.contrast = 10);
    }
    
    elTest() {
      this.disabled = !this.disabled;
    }
}
