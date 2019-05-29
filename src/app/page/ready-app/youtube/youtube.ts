
import { YoutubeService } from '../../../provider/youtube-service/youtube-service';

import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';

 @Component({
   selector: 'page-youtube',
   templateUrl: 'youtube.html',
 })
 export class YoutubePage {
   data:Array<any>=new Array();
   next:any=null;
   spnState:string='show';

   index_menu: any;
   page_name: any;
  page_path: any;
  component_name: any;


   constructor(
     public route: ActivatedRoute,
     public ytService:YoutubeService
     ) {
     this.data=new Array();
     this.route.params.subscribe(params => {
      this.index_menu = params.index;
      this.page_name = environment.menu[this.index_menu].name;
      this.page_path = environment.menu[this.index_menu].path;
      console.log('name: ' + this.page_name + ' path: ' + this.page_path);
    })
   }

   loadMore(infiniteScroll:any=null){
     var that = this;
     this.ytService.getVideos(this.next).subscribe(data=>{
       let items=data.items;
       for (var i = 0; i < items.length; i++) {
         let data=items[i];
         this.ytService.isFavorite(items[i]).then(result=>{
           data.isFavorite=false;
           this.data.push(data);
         })
       }
       this.next=data.nextPageToken;
       if(infiniteScroll){
         infiniteScroll.complete();
       }
       this.spnState='hide';
     },error=>{
       this.spnState='hide';
       if(infiniteScroll!=null){
         infiniteScroll.enable(false);
       }
     })
   }

   ionViewWillEnter() {
     this.loadMore();
   }

   ionViewDidEnter() {
     if(this.data.length!=0){
       for(let i = 0; i < this.data.length; i++) {
         this.ytService.isFavorite(this.data[i]).then(result=>{
           this.data[i].isFavorite=result;
         })
       }
     }
   }

 }
