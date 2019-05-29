import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginV4Component } from './login-v4.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: LoginV4Component }])
  ],
  exports: [LoginV4Component],
  declarations: [LoginV4Component],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginV4ComponentModule {}
