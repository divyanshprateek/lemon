
import { WordpressService } from '../../../provider/wordpress/wordpress';

import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'page-wordpress',
  templateUrl: 'wordpress.html',
})
export class WordpressPage {

  data:any=new Array();
  events: any={};
  per_page:number=5;
  spnState:string='show';
  page: number=0;

  query:string='';

  index_menu: any;
  page_name: any;
  page_path: any;
  component_name: any;

  constructor(
    public route: ActivatedRoute,
    public wpService:WordpressService
  ){
    this.loadMore();
    this.route.params.subscribe(params => {
      this.index_menu = params.index;
      this.page_name = environment.menu[this.index_menu].name;
      this.page_path = environment.menu[this.index_menu].path;
      console.log('name: ' + this.page_name + ' path: ' + this.page_path);
    })
  }

  onInput(){
    this.spnState='show';
    this.page=0;
    this.data=[];
    this.loadMore();
  }

  loadMore(infiniteScroll:any=null){
    if(this.query == null || this.query == '' || this.query == ' ' || this.query == undefined){
      this.page+=1;
      this.wpService.getPosts(this.page,this.per_page).subscribe(data=>{
        for (var i = 0;i< data.length ;i++){
          let post={
            id:data[i].id,
            title:data[i].title.rendered,
            excerpt:data[i].excerpt.rendered,
            link:data[i].link,
            thumb:null,
            isFavorite:false
          }

          this.wpService.getMedia(data[i].featured_media).subscribe(media=>{
            post.thumb=media.source_url;
          });

          this.wpService.isFavorite(data[i]).then(result=>{
            post.isFavorite=result;
            this.data.push(post);
          })
        };
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
    if(this.query != null && this.query != '' && this.query != ' ' && this.query != undefined){
      this.page+=1;
      this.wpService.getPosts(this.page,this.per_page,this.query).subscribe(data=>{
          for (var i = 0;i< data.length ;i++){
            let post={
               id:data[i].id,
                 title:data[i].title.rendered,
                 excerpt:data[i].excerpt.rendered,
                 link:data[i].link,
                 thumb:null,
                 isFavorite:false
            }

            this.wpService.getMedia(data[i].featured_media).subscribe(media=>{
              post.thumb=media.source_url;
            });

            this.wpService.isFavorite(data[i]).then(result=>{
                post.isFavorite=result;
            this.data.push(post);
                  })
          };
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

  ionViewDidEnter() {
    if(this.data.length!=0){
      for(let i = 0; i < this.data.length; i++) {
        this.wpService.isFavorite(this.data[i]).then(result=>{
          this.data[i].isFavorite=result;
        })
      }
    }
  }

}
