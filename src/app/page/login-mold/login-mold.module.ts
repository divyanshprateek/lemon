import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginMoldPage } from './login-mold.page';
import { ParallaxCommonModule } from '../../common/parallax/parallax.module';

import { LoginV1Component } from '../../component/login/login-v1/login-v1.component';
import { LoginV2Component } from '../../component/login/login-v2/login-v2.component';
import { LoginV3Component } from '../../component/login/login-v3/login-v3.component';
import { LoginV4Component } from '../../component/login/login-v4/login-v4.component';
import { LoginV5Component } from '../../component/login/login-v5/login-v5.component';
import { LoginV6Component } from '../../component/login/login-v6/login-v6.component';
import { LoginV7Component } from '../../component/login/login-v7/login-v7.component';
import { LoginV8Component } from '../../component/login/login-v8/login-v8.component';
import { LoginV9Component } from '../../component/login/login-v9/login-v9.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ParallaxCommonModule,
    RouterModule.forChild([{ path: '', component: LoginMoldPage }])
  ],
  declarations: [
    LoginMoldPage,
    LoginV1Component,
    LoginV2Component,
    LoginV3Component,
    LoginV4Component,
    LoginV5Component,
    LoginV6Component,
    LoginV7Component,
    LoginV8Component,
    LoginV9Component
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginMoldPageModule {}
