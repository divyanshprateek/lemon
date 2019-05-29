import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalViewComponent } from './modal-view.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ModalViewComponent }])
  ],
  exports: [ModalViewComponent],
  declarations: [ModalViewComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ModalViewComponentModule {}
