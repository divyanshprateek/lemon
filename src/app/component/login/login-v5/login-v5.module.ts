import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginV5Component } from './login-v5.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: LoginV5Component }])
  ],
  exports: [LoginV5Component],
  declarations: [LoginV5Component],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginV5ComponentModule {}
