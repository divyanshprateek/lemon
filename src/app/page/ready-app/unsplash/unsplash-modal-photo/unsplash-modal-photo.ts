import { Component, Input } from '@angular/core';
import { UnsplashService } from '../../../../provider/unsplash-service/unsplash-service';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'page-unsplash-modal-photo',
  templateUrl: 'unsplash-modal-photo.html',
  styleUrls: ['unsplash-modal-photo.scss']
})
export class UnsplashModalPhotoPage {
  @Input() data: any;
  favoriest_list:any;

  constructor(
   public unsplashService:UnsplashService,
   public route: ActivatedRoute,
   public modalController: ModalController,
  ){
    
  }

  dismiss(){
    this.modalController.dismiss();
  }

  ionViewWillEnter() {
    console.log(this.data);
    this.unsplashService.isFavorite(this.data).then(result=>{
      this.data.isFavorite=result;
    })
  }
}
