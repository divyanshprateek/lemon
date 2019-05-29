import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GalleryPage } from './gallery.page';
import { ParallaxCommonModule } from '../../common/parallax/parallax.module';

import { GalleryGridComponent } from '../../component/gallery/gallery-grid/gallery-grid.component';
import { GalleryMasonryComponent } from '../../component/gallery/gallery-masonry/gallery-masonry.component';
import { GalleryListComponent } from '../../component/gallery/gallery-list/gallery-list.component';
import { GalleryInfoComponent } from '../../component/gallery/gallery-info/gallery-info.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ParallaxCommonModule,
    RouterModule.forChild([{ path: '', component: GalleryPage }])
  ],
  declarations: [
    GalleryPage,
    GalleryGridComponent,
    GalleryMasonryComponent,
    GalleryListComponent,
    GalleryInfoComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GalleryPageModule {}
