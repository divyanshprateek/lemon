
import { WordpressService } from '../../../../provider/wordpress/wordpress';

import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

 @Component({
 	selector: 'page-wordpress-favorite',
 	templateUrl: 'wordpress-favorite.html',
 })
 export class WordpressFavoritePage {
 	data:any=new Array();
 	constructor(
 		public wpService:WordpressService
 	) {

 	}

 	ionViewWillEnter(){
 		this.data=new Array();
 		let that=this;
 		this.wpService.getAllFavorites().then(result=>{
 			this.data=result;
 		})
 	}

 	doFavorite(item){
 		this.wpService.doFavorite(item);
 		let index = this.wpService.getIndexOf(item.id,this.data);
        if(index !=-1){
          this.data.splice(index, 1);
        }
 	}

 	doClear(){
 		this.wpService.clearAllFavorite();
 		this.data=new Array();
 	}
 
 }
