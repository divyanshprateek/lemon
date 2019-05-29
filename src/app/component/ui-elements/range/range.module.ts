import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RangeComponent } from './range.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: RangeComponent }])
  ],
  exports: [RangeComponent],
  declarations: [RangeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RangeComponentModule {}
