import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SlidesOptionsComponent } from './slides-options.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: SlidesOptionsComponent }])
  ],
  exports: [SlidesOptionsComponent],
  declarations: [SlidesOptionsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SlidesOptionsComponentModule {}
