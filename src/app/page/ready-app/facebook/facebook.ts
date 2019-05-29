import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { FacebookService} from '../../../provider/facebook/facebook';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';

 @Component({
 	selector: 'page-facebook',
 	templateUrl: 'facebook.html',
 })
 
 export class FacebookPage {
 	list:Array<any>;
 	next:any=null;
 	page:any=null;
 	spnState:string='show';

 	index_menu: any;
 	page_name: any;
	page_path: any;
	component_name: any;

 	constructor(
 		public http:Http,
 		public fbService: FacebookService,
 		public route: ActivatedRoute
 	) {
 		this.list = new Array();

 		this.route.params.subscribe(params => {
			this.index_menu = params.index;
			this.page_name = environment.menu[this.index_menu].name;
			this.page_path = environment.menu[this.index_menu].path;
			console.log('name: ' + this.page_name + ' path: ' + this.page_path);
		})
 	}

 	ionViewWillEnter() {
 		console.log('ionViewDidLoad FacebookPage');
 		this.spnState='show';
 		this.fbService.getPage().subscribe(data=>{
 			this.page=data;
 			this.loadMore();
 		},error=>{
 			this.spnState='hide';
 		});
 	}

 	loadMore(infiniteScroll:any=null){
 		if(this.next==null){
            this.fbService.getPosts(this.next).subscribe(data=>{
				var tmpData=data.data;
 				console.log(tmpData);
 				this.next=data.paging.next;
 				this.list=this.list.concat(tmpData);
 				if(infiniteScroll){
 					infiniteScroll.complete();
 				}
 				this.spnState='hide';
            },error=>{
			    console.log(error);
 				if(infiniteScroll!=null){
 					infiniteScroll.enable(false);
 				}
 				this.spnState='hide';
            })
 		}else{
 			this.fbService.getPosts(this.next).subscribe(data=>{
			var tmpData=data.data;
 				this.next=data.paging.next;
 				this.list=this.list.concat(tmpData);
 				if(infiniteScroll){
 					infiniteScroll.complete();
 				}
 				if(this.next==undefined){
 					infiniteScroll.enable(false);
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
 }
