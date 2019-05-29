import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabProfilePage } from './tab-profile.page';
import { ParallaxCommonModule } from '../../common/parallax/parallax.module';
import { PopoverViewComponentModule } from '../../component/popover-view/popover-view.module';
import { PopoverViewComponent } from '../../component/popover-view/popover-view.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ParallaxCommonModule,
    PopoverViewComponentModule,
    RouterModule.forChild([{ path: '', component: TabProfilePage }])
  ],
  declarations: [TabProfilePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [PopoverViewComponent]
})
export class TabProfilePageModule {}
