import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileV4Component } from './profile-v4.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ProfileV4Component }])
  ],
  exports: [ProfileV4Component],
  declarations: [ProfileV4Component],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProfileV4ComponentModule {}
