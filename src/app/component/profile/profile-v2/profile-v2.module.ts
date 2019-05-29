import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileV2Component } from './profile-v2.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ProfileV2Component }])
  ],
  exports: [ProfileV2Component],
  declarations: [ProfileV2Component],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProfileV2ComponentModule {}
