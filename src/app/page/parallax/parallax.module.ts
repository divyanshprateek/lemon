import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParallaxPage } from './parallax.page';
import { ParallaxCommonModule } from '../../common/parallax/parallax.module';

import { ParallaxBackgroundComponent } from '../../component/parallax/parallax-background/parallax-background.component';
import { ParallaxCollapseComponent } from '../../component/parallax/parallax-collapse/parallax-collapse.component';
import { ParallaxCoverComponent } from '../../component/parallax/parallax-cover/parallax-cover.component';
import { ParallaxMixComponent } from '../../component/parallax/parallax-mix/parallax-mix.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ParallaxCommonModule,
    RouterModule.forChild([{ path: '', component: ParallaxPage }])
  ],
  declarations: [
    ParallaxPage,
    ParallaxBackgroundComponent,
    ParallaxCollapseComponent,
    ParallaxCoverComponent,
    ParallaxMixComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ParallaxPageModule {}
