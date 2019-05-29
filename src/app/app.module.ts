import { FormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';


import { FirebaseCrudModalComponentModule } from './component/firebase-crud/firebase-crud-modal/firebase-crud-modal.module';
import { ModalViewComponentModule } from './component/modal-view/modal-view.module';
import { NotfoundComponentModule } from './component/error/notfound/notfound.module';
import { InternalComponentModule } from './component/error/internal/internal.module';
import { UnsplashModalPhotoPageModule } from './page/ready-app/unsplash/unsplash-modal-photo/unsplash-modal-photo.module';

import { HttpModule, Http } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';

//facebook
import { FacebookService } from './provider/facebook/facebook';
//instagram
import { InstagramService } from './provider/instagram/instagram';
//unsplash 
import { UnsplashService } from './provider/unsplash-service/unsplash-service';
//wordpress 
import { WordpressService } from './provider/wordpress/wordpress';
//rss service
import { RssService } from './provider/rss-service/rss-service';
//youtube
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { YoutubeService } from './provider/youtube-service/youtube-service';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    HttpModule,
    HttpClientModule,
    FormsModule,
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    IonicStorageModule.forRoot(),
    FirebaseCrudModalComponentModule,
    ModalViewComponentModule,
    NotfoundComponentModule,
    InternalComponentModule,
    UnsplashModalPhotoPageModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FacebookService,
    InstagramService,
    YoutubeVideoPlayer,
    YoutubeService,
    RssService,
    UnsplashService,
    WordpressService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
