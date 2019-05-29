
import { RssService } from '../../../provider/rss-service/rss-service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';


 @Component({
 	selector: 'page-rss',
 	templateUrl: 'rss.html',
 })
 export class RssPage {
  list_category:Array<any>;

  index_menu: any;
  page_name: any;
  page_path: any;
  component_name: any;

  constructor(
   public rssService:RssService,
   public route: ActivatedRoute
   ) {
    this.route.params.subscribe(params => {
      this.index_menu = params.index;
      this.page_name = environment.menu[this.index_menu].name;
      this.page_path = environment.menu[this.index_menu].path;
      console.log('name: ' + this.page_name + ' path: ' + this.page_path);
    })
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad RssCategoryPage');
    this.rssService.getCategory(this.rssService.category).subscribe(data=>{
      this.list_category=new Array();
  		this.list_category=data;
  		console.log(this.list_category);
  	});
  }
 }
