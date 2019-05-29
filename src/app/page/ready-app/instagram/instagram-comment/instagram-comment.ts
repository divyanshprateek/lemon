
import { InstagramService } from '../../../../provider/instagram/instagram';

import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'page-instagram-comment',
  templateUrl: 'instagram-comment.html',
})
export class InstagramCommentPage {
  list:Array<any>;
  item:any;
  spnState:string='show';

  constructor(
   public instagramService:InstagramService,
   public route: ActivatedRoute
   ) {
    this.route.params.subscribe(params => {
    	this.item=params;
      this.instagramService.getComments(this.item).subscribe(data=>{
      	this.list=new Array<any>();
      	this.list=data.data;
        this.spnState='hide';
      },error=>{ 
        this.spnState='hide';
      })
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InstagramCommentPage');
  }
}
