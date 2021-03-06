import { Component } from '@angular/core';
import { SettingProvider } from '../../provider/setting/setting';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-tab-setting',
  templateUrl: 'tab-setting.page.html',
  styleUrls: ['tab-setting.page.scss']
})


export class TabSettingPage {

	list_theme: any;

	constructor(private SettingProvider: SettingProvider) {
		this.list_theme = environment.themes;
	}

	changeTheme(name) {
  	this.SettingProvider.setTheme(name);
	}
}
