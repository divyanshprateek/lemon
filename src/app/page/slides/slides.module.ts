import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SlidesPage } from './slides.page';
import { ParallaxCommonModule } from '../../common/parallax/parallax.module';

import { SlidesMoldComponent } from '../../component/slides/slides-mold/slides-mold.component';
import { SlidesOptionsComponent } from '../../component/slides/slides-options/slides-options.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ParallaxCommonModule,
    RouterModule.forChild([{ path: '', component: SlidesPage }])
  ],
  declarations: [
    SlidesPage,
    SlidesMoldComponent,
    SlidesOptionsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SlidesPageModule {}
