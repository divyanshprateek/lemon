import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GalleryMasonryComponent } from './gallery-masonry.component';
import { GalleryModalComponentModule } from '../gallery-modal/gallery-modal.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    GalleryModalComponentModule,
    RouterModule.forChild([{ path: '', component: GalleryMasonryComponent }])
  ],
  exports: [GalleryMasonryComponent],
  declarations: [GalleryMasonryComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GalleryMasonryComponentModule {}
