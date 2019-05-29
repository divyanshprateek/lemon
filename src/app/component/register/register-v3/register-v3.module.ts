import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterV3Component } from './register-v3.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: RegisterV3Component }])
  ],
  exports: [RegisterV3Component],
  declarations: [RegisterV3Component],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RegisterV3ComponentModule {}
