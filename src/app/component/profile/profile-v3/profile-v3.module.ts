import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileV3Component } from './profile-v3.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ProfileV3Component }])
  ],
  exports: [ProfileV3Component],
  declarations: [ProfileV3Component],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProfileV3ComponentModule {}
