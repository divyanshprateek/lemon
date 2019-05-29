import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropDragPage } from './drop-drag.page';
import { ParallaxCommonModule } from '../../common/parallax/parallax.module';
import { DropDragComponent } from '../../component/drop-drag/drop-drag.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ParallaxCommonModule,
    RouterModule.forChild([{ path: '', component: DropDragPage }])
  ],
  declarations: [
    DropDragPage,
    DropDragComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DropDragPageModule {}
