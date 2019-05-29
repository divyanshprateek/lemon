import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

const STORAGE_KEY="youtube_favorites";
const config= {
  'api_key':'AIzaSyBkIDvXVRC_cz5OesRYQzMcw5RG2E5hYVk',
  'api_link':'https://www.googleapis.com/youtube/v3/search?',
  'channel_id':'UCAL3JXZSzSm8AlZyD3nQdBA',
  'limit_post':20
}

@Injectable()
export class YoutubeService {
  constructor(
    public http: HttpClient,
    public iab: InAppBrowser,
    public socialSharing:SocialSharing,
    public storage:Storage,
    private youtube: YoutubeVideoPlayer
    ) {

  }

  public getVideos(next:any):Observable<any>{
    if(next==null){
      return this.http.get(config.api_link
        +'key='+config.api_key
        +'&channelId='
        +config.channel_id
        +'&part=snippet,id&order=date&maxResults='+config.limit_post);
    }else{
      return this.http.get(config.api_link
        +'key='+config.api_key
        +'&channelId='
        +config.channel_id
        +'&part=snippet,id&order=date&maxResults='+config.limit_post+'&pageToken='+next);
    }
  }


  isFavorite(item){
    return this.getAllFavorites().then(result => {
      if(result){
        if(this.getIndexOf(item.id.videoId,result)!=-1){
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
        let index=this.getIndexOf(item.id.videoId,result);
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
      if(result[i].id.videoId == id ){
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
      this.socialSharing.share(item.snippet.title, item.snippet.description, null, 'https://www.youtube.com/watch?v='+item.id.videoId);
    }

    doOpen(item){
      const browser = this.iab.create('https://www.youtube.com/watch?v='+item.id.videoId);
    }

    play(video_id){
      this.youtube.openVideo(video_id);
    }

  }
