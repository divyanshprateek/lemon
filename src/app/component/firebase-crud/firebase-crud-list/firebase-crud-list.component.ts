import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FirebaseCrudProvider } from '../../../provider/firebase/firebase-crud';
import { FirebaseCrudModalComponent } from '../firebase-crud-modal/firebase-crud-modal.component';

@Component({
	selector: 'component-firebase-crud-list',
	templateUrl: 'firebase-crud-list.component.html',
	styleUrls: ['firebase-crud-list.component.scss']
})
export class FirebaseCrudListComponent {

	data_list: any;

	constructor(
		public FirebaseCrudProvider: FirebaseCrudProvider,
		public modalController: ModalController,
	){
    this.getData();
  }


  openModal(item){
    this.presentModal(item);
  }

  async presentModal(item) {
    const modal_crud = await this.modalController.create({
      component: FirebaseCrudModalComponent,
      componentProps: { data_crud: item }
    });
    modal_crud.onDidDismiss().then((data) => {
      this.getData();
    })
    return await modal_crud.present();
  }

  dellTask(id){
    this.FirebaseCrudProvider.deleteTask(id);
    this.getData();
  }

  getData(){
    this.FirebaseCrudProvider.getTasks().then(tasks => {
      this.data_list = tasks;
      console.log(this.data_list);
    });
  }

}
