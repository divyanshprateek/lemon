import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginV6Component } from './login-v6.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: LoginV6Component }])
  ],
  exports: [LoginV6Component],
  declarations: [LoginV6Component],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginV6ComponentModule {}
