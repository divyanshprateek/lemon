import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginV2Component } from './login-v2.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: LoginV2Component }])
  ],
  exports: [LoginV2Component],
  declarations: [LoginV2Component],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginV2ComponentModule {}
