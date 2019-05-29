import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginV3Component } from './login-v3.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: LoginV3Component }])
  ],
  exports: [LoginV3Component],
  declarations: [LoginV3Component],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginV3ComponentModule {}
