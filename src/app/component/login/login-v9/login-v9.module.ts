import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginV9Component } from './login-v9.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: LoginV9Component }])
  ],
  exports: [LoginV9Component],
  declarations: [LoginV9Component],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginV9ComponentModule {}
