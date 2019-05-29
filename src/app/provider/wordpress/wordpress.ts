import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
// import 'rxjs/add/operator/map';
import { map, filter, scan, retry, catchError } from 'rxjs/operators';

const STORAGE_KEY="wp_favorites";
const config = {
  api_link:'http://wp.lrandomdev.com/wp-json/wp/v2/'
}
/*

  Generated class for the WordpressProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
  @Injectable()
  export class WordpressService {
    constructor(
      public http: HttpClient,
      public storage:Storage,
      public iab: InAppBrowser,
      public socialSharing:SocialSharing
    ) {
    
    }

    getPosts(page,per_page,search:String=''):Observable<any>{
      if(search!=''){
        return this.http.get(config.api_link+'posts?page='+page+'&per_page='+per_page+'&search='+search);
      }
      return this.http.get(config.api_link+'posts?page='+page+'&per_page='+per_page);
    }

    getPostsByCategories(page,per_page,categories):Observable<any>{
      return this.http.get(config.api_link+'posts?page='+page+'&per_page='+per_page+'&categories='+categories);
    }

    getPost(id):Observable<any>{
      return this.http.get(config.api_link+'posts/'+id);
    }

    getCategorys(page,per_page){
      return this.http.get(config.api_link+'categories?page='+page+'&per_page='+per_page);
    }

    getMedia(id: number):Observable<any>{
      return this.http.get(config.api_link+'media/'+id);
    }

    getComments(page,per_page,post_id:any=null):Observable<any>{
      return this.http.get(config.api_link+'comments?page='+page+'&per_page='+per_page+'&post='+post_id);
    }


    //favorites
    isFavorite(item){
      return this.getAllFavorites().then(result => {
        if(result){
          if(this.getIndexOf(item.id,result)!=-1){
            return true;
          }else{
            return false;
          }
        }else{
          return false;
        }
      });
    }

    favorite(item){
      return this.getAllFavorites().then(result => {
        if (result) {
          result.push(item);
          return this.storage.set(STORAGE_KEY, result);
        } else {
          return this.storage.set(STORAGE_KEY, [item]);
        }
      });
    }

    unFavorite(item){
      return this.getAllFavorites().then(result=>{
        if(result){
           let index=this.getIndexOf(item.id,result);
          result.splice(index,1);
          return this.storage.set(STORAGE_KEY,result);
        }
      })
    }

   getAllFavorites(){
      return this.storage.get(STORAGE_KEY);
   }

   getIndexOf(id:any,result:any){
      for (var i = 0; i < result.length; i++) {
        if(result[i].id == id ){
          return i;
        }
      }
      return -1;
   }

   clearAllFavorite(){
      this.storage.remove(STORAGE_KEY);
   }


   //action on click event
   doFavorite(item){
     this.isFavorite(item).then(result=>{
      if(result==false){
        item.isFavorite=true;
        this.favorite(item);
      }else{
        item.isFavorite=false;
        this.unFavorite(item);
      }
     })
   }

   // doReadMore(navCtrl,item){
   //   navCtrl.push('WordpressDetailPage',{id:item.id});
   // }
   
   doShare(item){
      this.socialSharing.share(item.name, item.content, null, item.link);
   }

   // goToPosts(navCtrl,item){
   //   navCtrl.push('WordpressPostsPage',{id:item.id});
   // }

   doOpen(item){
     const browser = this.iab.create(item.link);
   }
   //end action on click event

  }