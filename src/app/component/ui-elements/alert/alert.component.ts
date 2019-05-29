import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
	selector: 'component-alert',
	templateUrl: 'alert.component.html',
	styleUrls: ['alert.component.scss']
})
export class AlertComponent {

	constructor( public alertController: AlertController ){ }

	toAlert(){
		this.presentAlert();
	}

	toAlertLongMessage(){
		this.presentAlertLongMessage();
	}

	toAlertMultipleButtons(){
		this.presentAlertMultipleButtons();
	}

	toAlertNoMessage(){
		this.presentAlertNoMessage();
	}

	toAlertConfirm(){
		this.presentAlertConfirm();
	}

	toAlertPrompt(){
		this.presentAlertPrompt();
	}

	toAlertRadio(){
		this.presentAlertRadio();
	}

	toAlertCheckbox(){
		this.presentAlertCheckbox();
	}
	
	toWithCssClass(){
		this.presentWithCssClass();
	}




	async presentAlert() {
		const alert = await this.alertController.create({
			header: 'Alert',
			subHeader: 'Subtitle',
			message: 'This is an alert message.',
			buttons: ['OK']
		});

		await alert.present();
	}

	async presentAlertLongMessage() {
		const alert = await this.alertController.create({
			header: 'Alert',
			message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit diam lorem, a faucibus turpis sagittis eu. In finibus augue in dui varius convallis. Donec vulputate nibh gravida odio vulputate commodo. Suspendisse imperdiet consequat egestas. Nulla feugiat consequat urna eu tincidunt. Cras nec blandit turpis, eu auctor nunc. Pellentesque finibus, magna eu vestibulum imperdiet, arcu ex lacinia massa, eget volutpat quam leo a orci. Etiam mauris est, elementum at feugiat at, dictum in sapien. Mauris efficitur eros sodales convallis egestas. Phasellus eu faucibus nisl. In eu diam vitae libero egestas lacinia. Integer sed convallis metus, nec commodo felis. Duis libero augue, ornare at tempus non, posuere vel augue. Cras mattis dui at tristique aliquam. Phasellus fermentum nibh ligula, porta hendrerit ligula elementum eu. Suspendisse sollicitudin enim at libero iaculis pulvinar. Donec ac massa id purus laoreet rutrum quis eu urna. Mauris luctus erat vel magna porttitor, vel varius erat rhoncus. Donec eu turpis vestibulum, feugiat urna id, gravida mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at lobortis tortor. Nam ultrices volutpat elit, sed pharetra nulla suscipit at. Nunc eu accumsan eros, id auctor libero. Suspendisse potenti. Nam vitae dapibus metus. Maecenas nisi dui, sagittis et condimentum eu, bibendum vel eros. Vivamus malesuada, tortor in accumsan iaculis, urna velit consectetur ante, nec semper sem diam a diam. In et semper ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit, velit vel porttitor euismod, neque risus blandit nulla, non laoreet libero dolor et odio. Nulla enim risus, feugiat eu urna sed, ultrices semper felis. Sed blandit mi diam. Nunc quis mi ligula. Pellentesque a elit eu orci volutpat egestas. Aenean fermentum eleifend quam, ut tincidunt eros tristique et. Nam dapibus tincidunt ligula, id faucibus felis sodales quis. Donec tincidunt lectus ipsum, ac semper tellus cursus ac. Vestibulum nec dui a lectus accumsan vestibulum quis et velit. Aliquam finibus justo et odio euismod, viverra condimentum eros tristique. Sed eget luctus risus. Pellentesque lorem magna, dictum non congue sodales, laoreet eget quam. In sagittis vulputate dolor a ultricies. Donec viverra leo sed ex maximus, in finibus elit gravida. Aliquam posuere vulputate mi. Suspendisse potenti. Nunc consectetur congue arcu, at pharetra dui varius non. Etiam vestibulum congue felis, id ullamcorper neque convallis ultrices. Aenean congue, diam a iaculis mollis, nisl eros maximus arcu, nec hendrerit purus felis porta diam. Nullam vitae ultrices dui, ac dictum sapien. Phasellus eu magna luctus, varius urna id, molestie quam. Nulla in semper tellus. Curabitur lacinia tellus sit amet lacinia dapibus. Sed id condimentum tellus, nec aliquam sapien. Vivamus luctus at ante a tincidunt.',
			buttons: ['Cancel', 'OK']
		});
		return await alert.present();
	} 

	async presentAlertNoMessage() {
		const alert = await this.alertController.create({
			header: 'Alert',
			buttons: ['OK']
		});
		return await alert.present();
	}

	async presentAlertMultipleButtons() {
		const alert = await this.alertController.create({
			header: 'Alert',
			subHeader: 'Subtitle',
			message: 'This is an alert message.',
			buttons: ['Cancel', 'Open Modal', 'Delete']
		});

		await alert.present();
	}

	async presentAlertConfirm() {
		const alert = await this.alertController.create({
			header: 'Confirm!',
			message: 'Message <strong>text</strong>!!!',
			buttons: [
			{
				text: 'Cancel',
				role: 'cancel',
				cssClass: 'secondary',
				handler: (blah) => {
					console.log('Confirm Cancel: blah');
				}
			}, {
				text: 'Okay',
				handler: () => {
					console.log('Confirm Okay');
				}
			}
			]
		});

		await alert.present();
	}

	async presentAlertPrompt() {
		const alert = await this.alertController.create({
			header: 'Prompt!',
			inputs: [
				{
					name: 'name1',
					type: 'text',
					placeholder: 'Placeholder 1'
				},
				{
					name: 'name2',
					type: 'text',
					value: 'hello',
					placeholder: 'Placeholder 2'
				},
				{
					name: 'name3',
					value: 'http://ionicframework.com',
					type: 'url',
					placeholder: 'Favorite site ever'
				},
				{
					name: 'name5',
					type: 'date'
				},
				{
					name: 'name6',
					type: 'number',
					min: -5,
					max: 10
				},
				{
					name: 'name7',
					type: 'number'
				}
			],
			buttons: [
				{
					text: 'Cancel',
					role: 'cancel',
					cssClass: 'secondary',
					handler: () => {
						console.log('Confirm Cancel');
					}
				}, {
					text: 'Ok',
					handler: () => {
						console.log('Confirm Ok');
					}
				}
			]
		});

		await alert.present();
	}

	async presentAlertRadio() {
		const alert = await this.alertController.create({
			header: 'Radio',
			inputs: [
			{
				name: 'radio1',
				type: 'radio',
				label: 'Radio 1',
				value: 'value1',
				checked: true
			},
			{
				name: 'radio2',
				type: 'radio',
				label: 'Radio 2',
				value: 'value2'
			},
			{
				name: 'radio3',
				type: 'radio',
				label: 'Radio 3',
				value: 'value3'
			},
			{
				name: 'radio4',
				type: 'radio',
				label: 'Radio 4',
				value: 'value4'
			},
			{
				name: 'radio5',
				type: 'radio',
				label: 'Radio 5',
				value: 'value5'
			},
			{
				name: 'radio6',
				type: 'radio',
				label: 'Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 ',
				value: 'value6'
			}
			],
			buttons: [
			{
				text: 'Cancel',
				role: 'cancel',
				cssClass: 'secondary',
				handler: () => {
					console.log('Confirm Cancel');
				}
			}, {
				text: 'Ok',
				handler: () => {
					console.log('Confirm Ok');
				}
			}
			]
		});

		await alert.present();
	}

	async presentAlertCheckbox() {
		const alert = await this.alertController.create({
			header: 'Checkbox',
			inputs: [
			{
				name: 'checkbox1',
				type: 'checkbox',
				label: 'Checkbox 1',
				value: 'value1',
				checked: true
			},
			{
				name: 'checkbox2',
				type: 'checkbox',
				label: 'Checkbox 2',
				value: 'value2'
			},
			{
				name: 'checkbox3',
				type: 'checkbox',
				label: 'Checkbox 3',
				value: 'value3'
			},
			{
				name: 'checkbox4',
				type: 'checkbox',
				label: 'Checkbox 4',
				value: 'value4'
			},
			{
				name: 'checkbox5',
				type: 'checkbox',
				label: 'Checkbox 5',
				value: 'value5'
			},
			{
				name: 'checkbox6',
				type: 'checkbox',
				label: 'Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6',
				value: 'value6'
			}
			],
			buttons: [
			{
				text: 'Cancel',
				role: 'cancel',
				cssClass: 'secondary',
				handler: () => {
					console.log('Confirm Cancel');
				}
			}, {
				text: 'Ok',
				handler: () => {
					console.log('Confirm Ok');
				}
			}
			]
		});

		await alert.present();
	}

	async presentWithCssClass() {
		const alert = await this.alertController.create({
			header: 'Alert',
			subHeader: 'Subtitle',
			cssClass: 'my-class my-customClass',
			message: 'This is an alert message.',
			buttons: [{
				text: 'Ok',
				cssClass: 'my-class my-customClass',
				handler: () => {
					console.log('Confirm Ok')
				}
			}]
		});
		return await alert.present();
	}

}
