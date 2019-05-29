
import { WordpressService } from '../../../../provider/wordpress/wordpress';

import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

 @Component({
 	selector: 'page-wordpress-category',
 	templateUrl: 'wordpress-category.html',
 })
 export class WordpressCategoryPage {
 	data:any=new Array();
 	events: any={};
 	page:number=0;
 	per_page:number=15;
 	spnState:string='show';

 	constructor(
 		public wpService:WordpressService
 	) {
 		this.loadMore();
 	}

 	loadMore(infiniteScroll:any=null){
 		this.page+=1;
 		this.wpService.getCategorys(this.page,this.per_page).subscribe(data=>{
 			this.data=this.data.concat(data);
 			this.spnState='hide';
 			if(infiniteScroll){
 				infiniteScroll.complete();
 			}
 		},error=>{
 			this.spnState='hide';
 			if(infiniteScroll!=null){
 				infiniteScroll.enable(false);
 			}
 		})
 	}

 }
