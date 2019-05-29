import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterV1Component } from './register-v1.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: RegisterV1Component }])
  ],
  exports: [RegisterV1Component],
  declarations: [RegisterV1Component],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RegisterV1ComponentModule {}
