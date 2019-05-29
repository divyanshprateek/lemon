import { Component } from '@angular/core';
import { FacebookService} from '../../../../provider/facebook/facebook';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../../../../environments/environment';


 @Component({
 	selector: 'page-facebook-comment',
 	templateUrl: 'facebook-comment.html',
 })
 export class FacebookCommentPage {
 	item:any;
 	list:Array<any>;
 	next:any=null;
 	spnState:string='show';

 	constructor(
 		public facebookService:FacebookService,
 		public route: ActivatedRoute
 	) {
 		this.route.params.subscribe(params => {
 			this.item = params;
			console.log(this.item);
		})

 		this.list=new Array<any>();
 		this.loadMore();
 	}

 	loadMore(infiniteScroll:any=null){
 		this.facebookService.getComments(this.next,this.item).subscribe(data=>{
 			var tmpData=data.data;
 			this.next=data.paging.next;
 			this.list=this.list.concat(tmpData);
 			console.log(this.list);
 			if(infiniteScroll){
 				infiniteScroll.complete();
 			}
 			if(this.next==undefined){
 				if(infiniteScroll!=null){
 					infiniteScroll.enable(false);
 			    }
 			}
 			this.spnState='hide';
 		},error=>{
 			console.log(error);
 			if(infiniteScroll!=null){
 				infiniteScroll.enable(false);
 			}
 			this.spnState='hide';
 		})
 	}

 }
