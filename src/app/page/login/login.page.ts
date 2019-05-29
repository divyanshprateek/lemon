import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { FirebaseAuthenticationProvider } from '../../provider/firebase/firebase-authentication';

import { catchError } from 'rxjs/operators';

@Component({
	selector: 'app-login',
	templateUrl: 'login.page.html',
	styleUrls: ['login.page.scss']
})
export class LoginPage implements OnInit {

	loginForm: FormGroup;
	loading: any;

	constructor(
		public alertController: AlertController,
		public loadingController: LoadingController,
		private router: Router,
		public formBuilder: FormBuilder,
		public FirebaseAuthenticationProvider: FirebaseAuthenticationProvider
	) {
		this.loginForm = formBuilder.group({
			email: ['demo@gmail.com', Validators.compose([Validators.required, Validators.email])],
			password: ['123456', Validators.compose([Validators.minLength(6), Validators.required])]
		});
	}



	ngOnInit() {
		
	}



	loginUser(): void {
        if (!this.loginForm.valid) {
            console.log(this.loginForm.value);
        } else {
            this.FirebaseAuthenticationProvider.loginUser(this.loginForm.value.email, this.loginForm.value.password).then(authData => {
                this.loading.dismiss().then(() => {
                    this.router.navigate(['tabs']);
                });
            }, error => {
                this.loading.dismiss().then(() => {
                	this.presentAlert();
                });
            });
            this.presentLoading();          
        }
    }

    async presentLoading() {
	    this.loading = await this.loadingController.create({
	      	message: 'waiting',
	      	duration: 2000
	    });
	    return await this.loading.present();
	}


	async presentAlert() {
	    const alert = await this.alertController.create({
	      	header: 'Login failed',
	      	message: 'email or password is wrong',
	      	buttons: ['OK']
	    });
	    await alert.present();
	}


    openSignup(): void {
    	this.router.navigate(['signup']);
    }

    openForgotPwd(): void {
    	this.router.navigate(['forgot']);
    }

}
