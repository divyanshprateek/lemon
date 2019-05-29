import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PopoverViewComponent } from './popover-view.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ],
  exports: [PopoverViewComponent],
  declarations: [PopoverViewComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PopoverViewComponentModule {}
