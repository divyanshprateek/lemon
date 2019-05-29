import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileV1Component } from './profile-v1.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ProfileV1Component }])
  ],
  exports: [ProfileV1Component],
  declarations: [ProfileV1Component],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProfileV1ComponentModule {}
