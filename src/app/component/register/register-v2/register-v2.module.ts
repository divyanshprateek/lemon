import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterV2Component } from './register-v2.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: RegisterV2Component }])
  ],
  exports: [RegisterV2Component],
  declarations: [RegisterV2Component],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RegisterV2ComponentModule {}
