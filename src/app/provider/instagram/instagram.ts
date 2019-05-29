import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
/*
  Generated class for the InstagramProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
  const config={
    'api_link':'https://api.instagram.com/v1/',
    'access_token':'988466415.3a40777.aa1b01b5bb5748c5a878457d0d7e0550',
    'limit_post':10
  }
  @Injectable()
  export class InstagramService {

  	constructor(
      public http: HttpClient,
      public iab: InAppBrowser,
      public socialSharing:SocialSharing
    ) {

  	}

  	public getPosts(next:any):Observable<any>{
  		if(next=='' && next!=null){
  			return this.http.get(config.api_link+'users/self/media/recent?access_token='+config.access_token+'&count='+config.limit_post);
  		}else{
  			return this.http.get(next);
  		}
  	}

  	public getComments(item:any):Observable<any>{
  		return this.http.get(config.api_link+'media/'+item.id+'/comments/?access_token='+config.access_token);
  	}

    doOpen(item){
      const browser = this.iab.create(item.link);
    }

    doShare(item){
      this.socialSharing.share(item.name, item.message, null, item.link);
    }

  }
