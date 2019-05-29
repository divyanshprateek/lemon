import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';

import {InstagramService} from '../../../provider/instagram/instagram'

@Component({
  selector: 'page-instagram',
  templateUrl: 'instagram.html',
})
export class InstagramPage {
 list:Array<any>;
 next:any='';
 next_max_id:any=0;
 spnState:string='show';

 index_menu: any;
 page_name: any;
 page_path: any;
 component_name: any;

 constructor(
   public http:Http,
   public isService: InstagramService,
   public route: ActivatedRoute
   ) {
   this.list= new Array();

   this.route.params.subscribe(params => {
    this.index_menu = params.index;
    this.page_name = environment.menu[this.index_menu].name;
    this.page_path = environment.menu[this.index_menu].path;
    console.log('name: ' + this.page_name + ' path: ' + this.page_path);
  })
 }

 ionViewWillEnter() {
   console.log('ionViewDidLoad Instagram');
   this.loadMore();
 }

 loadMore(infiniteScroll:any=null){
   this.isService.getPosts(this.next).subscribe(data=>{
     var tmpData=data.data;
     this.next=data.pagination.next_url;
     this.list=this.list.concat(tmpData);
     if(infiniteScroll){
      infiniteScroll.complete();
    }
    this.spnState='hide';
  },error=>{
    if(infiniteScroll!=null){
     infiniteScroll.enable(false);
   }
   this.spnState='hide';
 });
 }
}
