import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginV7Component } from './login-v7.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: LoginV7Component }])
  ],
  exports: [LoginV7Component],
  declarations: [LoginV7Component],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginV7ComponentModule {}
