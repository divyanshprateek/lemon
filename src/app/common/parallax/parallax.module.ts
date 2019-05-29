import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParallaxCommon } from './parallax.common';
import { ParallaxCommonDirective } from './parallax.directive';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    ParallaxCommonDirective
  ],
  declarations: [ParallaxCommon, ParallaxCommonDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [ParallaxCommon]
})
export class ParallaxCommonModule {}
