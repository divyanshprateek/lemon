import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterPage } from './register.page';
import { ParallaxCommonModule } from '../../common/parallax/parallax.module';

import { RegisterV1Component } from '../../component/register/register-v1/register-v1.component';
import { RegisterV2Component } from '../../component/register/register-v2/register-v2.component';
import { RegisterV3Component } from '../../component/register/register-v3/register-v3.component';


@NgModule({
  imports: [
    IonicModule, 
    CommonModule,
    FormsModule,
    ParallaxCommonModule,
    RouterModule.forChild([{ path: '', component: RegisterPage }])
  ],
  declarations: [
    RegisterPage,
    RegisterV1Component,
    RegisterV2Component,
    RegisterV3Component
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RegisterPageModule {}
