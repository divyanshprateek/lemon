import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseCrudProvider } from '../../../provider/firebase/firebase-crud';

@Component({
	selector: 'component-firebase-crud-modal',
	templateUrl: 'firebase-crud-modal.component.html',
	styleUrls: ['firebase-crud-modal.component.scss']
})
export class FirebaseCrudModalComponent implements OnInit{

	@Input() data_crud: any;
	crudForm: FormGroup;

	constructor(
		public FirebaseCrudProvider: FirebaseCrudProvider,
		public modalController: ModalController,
		public formBuilder: FormBuilder,
	){
		
	}


	ngOnInit(){
		console.log(this.data_crud);
		
		if(this.data_crud != undefined){
			let tempTitle = this.data_crud.payload.doc.data().title;
			let tempContent = this.data_crud.payload.doc.data().content;

			this.crudForm = this.formBuilder.group({
				title: [tempTitle, Validators.compose([Validators.minLength(200), Validators.required])],
				content: [tempContent, Validators.compose([Validators.minLength(200), Validators.required])]
			});
		}else{
			this.crudForm = this.formBuilder.group({
				title: ['', Validators.compose([Validators.required])],
				content: ['', Validators.compose([Validators.minLength(6), Validators.required])]
			});
		}
	}

	
	saveCrud(value){
		
		console.log(value);

		if(this.data_crud != undefined){
			let idEdit = this.data_crud.payload.doc.id;
		    this.FirebaseCrudProvider.updateTask(idEdit, value).then(res => {
		        this.data_crud = undefined;
		        this.modalController.dismiss();
		    }) 
		}else{
			this.FirebaseCrudProvider.createTask(value).then(res => {
				this.data_crud = undefined;
				this.modalController.dismiss();
			})
		}
	}


	dismiss(){
		this.data_crud = undefined;
		this.modalController.dismiss();
	}

}
