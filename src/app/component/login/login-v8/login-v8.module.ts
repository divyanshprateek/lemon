import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginV8Component } from './login-v8.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: LoginV8Component }])
  ],
  exports: [LoginV8Component],
  declarations: [LoginV8Component],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginV8ComponentModule {}
