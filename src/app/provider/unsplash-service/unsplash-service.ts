import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

const STORAGE_KEY="unsplash_favorites";
const config={
    'api_link':'https://api.unsplash.com/',
    'client_id':'5d36fcf2215455d7f96a5e8b74878eea0d47f040ee151c9990c6da52f593f3b2'
  }
/*
  Generated class for the UnsplashServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
  @Injectable()
  export class UnsplashService {
    constructor(public http: HttpClient, 
      public storage:Storage,
      public iab: InAppBrowser,
      public socialSharing:SocialSharing
    ){
      
    }

    getCollections(page,per_page):Observable<any>{
      return this.http.get(config.api_link+'collections?page='+page+'&per_page='+per_page+'&client_id='+config.client_id);
    }

    getPhotos(page,per_page):Observable<any>{
      return this.http.get(config.api_link+'photos?page='+page+'&per_page='+per_page+'&client_id='+config.client_id);
    }

    searchPhotos(query,page,per_page):Observable<any>{
      return this.http.get(config.api_link+'search/photos?query='+query+'&page='+page+'&per_page='+per_page+'&client_id='+config.client_id);
    }

    getPhotosByCollection(collectionId,page,per_page):Observable<any>{
      return this.http.get(config.api_link+'/collections/'+collectionId+'/photos?page='+page+'&per_page='+per_page+'&client_id='+config.client_id);
    }

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

    doShare(item){
      this.socialSharing.share(item.title, item.links.html, null, item.link);
    }

    doOpen(item){
      const browser = this.iab.create(item.links.html);
    }

    doDownload(item){

    }
  }
