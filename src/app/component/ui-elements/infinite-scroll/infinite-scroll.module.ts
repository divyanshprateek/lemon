import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollComponent } from './infinite-scroll.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: InfiniteScrollComponent }])
  ],
  exports: [InfiniteScrollComponent],
  declarations: [InfiniteScrollComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InfiniteScrollComponentModule {}
