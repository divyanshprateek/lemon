import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { environment } from '../environments/environment';
import { SettingProvider } from './provider/setting/setting';

import * as firebase from 'firebase';

import { FirebaseAuthenticationProvider } from './provider/firebase/firebase-authentication';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private SettingProvider: SettingProvider,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    public FirebaseAuthenticationProvider: FirebaseAuthenticationProvider
  ) {

    firebase.initializeApp(environment.firebase);

    firebase.auth().onAuthStateChanged((user) => {
      if(!user){
        console.log("not login");
        this.router.navigate(['login']);
      }else{
        console.log("login");
        this.router.navigate(['tabs']);
      }
    });


    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
