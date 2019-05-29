import { Component } from '@angular/core';

@Component({
	selector: 'component-drop-drag',
	templateUrl: 'drop-drag.component.html',
	styleUrls: ['drop-drag.component.scss']
})
export class DropDragComponent {

	constructor(){ }

	itemReorder(event){
		console.log(event);
	}

}
