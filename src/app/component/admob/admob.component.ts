import { Component } from '@angular/core';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';

const bannerConfig: AdMobFreeBannerConfig = {
	isTesting: true,
	autoShow: true
};

// const interstitialConfig: AdMobFreeInterstitialConfig = {
//     isTesting: true, // Remove in production
//     autoShow: true
// };

// let rewardVideoConfig: AdMobFreeRewardVideoConfig = {
//     isTesting: true, // Remove in production
//     autoShow: true
// };

@Component({
	selector: 'component-admob',
	templateUrl: 'admob.component.html',
	styleUrls: ['admob.component.scss']
})
export class AdmobComponent {

	

	constructor(private admobFree: AdMobFree){ 
		
	}

	showBanner(){
		this.admobFree.banner.config(bannerConfig);
		this.admobFree.banner.prepare().then(() => {
	    	// banner Ad is ready
	    	// if we set autoShow to false, then we will need to call the show method here
	    }).catch(e => console.log(e));
	}

	// openInterstitial() {
 //        this.admobFree.interstitial.config(interstitialConfig);
 //        this.admobFree.interstitial.prepare().then(() => {
 //        });
 //    }

    // openRewardVideo() {
    //     this.admobFree.rewardVideo.config(rewardVideoConfig);
    //     this.admobFree.rewardVideo.prepare().then(() => {
    //     });
    // }

}
