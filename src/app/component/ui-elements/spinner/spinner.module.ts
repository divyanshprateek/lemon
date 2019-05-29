import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './spinner.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: SpinnerComponent }])
  ],
  exports: [SpinnerComponent],
  declarations: [SpinnerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SpinnerComponentModule {}
