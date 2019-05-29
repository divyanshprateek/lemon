import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileV5Component } from './profile-v5.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ProfileV5Component }])
  ],
  exports: [ProfileV5Component],
  declarations: [ProfileV5Component],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProfileV5ComponentModule {}
