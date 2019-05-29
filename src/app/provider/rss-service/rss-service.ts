import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import xml2js from 'xml2js';
import { Observable } from 'rxjs';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Storage } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

const STORAGE_KEY="rss_favorites";
/*
  Generated class for the RssServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
  @Injectable()
  export class RssService{
    public category:any=[
      { 
        'title':'World',
        'link':'http://rss.nytimes.com/services/xml/rss/nyt/Americas.xml'
      },
      {
        'title':'Arts',
        'link':'http://rss.nytimes.com/services/xml/rss/nyt/Arts.xml'
      },
      {
        'title':'Health',
        'link':'https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/section/well/rss.xml'
      },
      {
        'title':'Travel',
        'link':'https://intransit.blogs.nytimes.com/feed'
      }
    ];

  	constructor(
      public http: HttpClient,
      public iab: InAppBrowser,
      public socialSharing:SocialSharing,
      public storage:Storage
      ) {

  	}

  	getCategory(data): Observable<any>{
      return new Observable(observer=>{
  			observer.next(data);
  			observer.complete();
  		})
  	}

  	getPosts(link:string=null):Observable<any>{
  		return this.http.get(link,{ responseType: "text" });
  	}

    convertToJson(data:string){
  			let res;
  			xml2js.parseString(data, { explicitArray: false }, (error, result) => {
  				if (error) {
  					throw new Error(error);
  				} else {
  					res = result;
  				}
  			});
  			return res;
  	}

    isFavorite(item){
      return this.getAllFavorites().then(result => {
        if(result){
          if(this.getIndexOf(item.link,result)!=-1){
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
          let index=this.getIndexOf(item.link,result);
          result.splice(index,1);
          return this.storage.set(STORAGE_KEY,result);
        }
      })
    }

    getAllFavorites(){
      return this.storage.get(STORAGE_KEY);
    }

    getIndexOf(link:any,result:any){
      for (var i = 0; i < result.length; i++) {
        if(result[i].link == link ){
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

    doOpen(item){
       this.iab.create(item.link);
    }

    doShare(item){
       this.socialSharing.share(item.title, item.description, null, item.link);
    }

  }
