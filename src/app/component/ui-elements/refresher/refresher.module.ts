import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RefresherComponent } from './refresher.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: RefresherComponent }])
  ],
  exports: [RefresherComponent],
  declarations: [RefresherComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RefresherComponentModule {}
