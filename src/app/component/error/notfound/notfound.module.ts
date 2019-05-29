import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotfoundComponent } from './notfound.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: NotfoundComponent }])
  ],
  exports: [NotfoundComponent],
  declarations: [NotfoundComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NotfoundComponentModule {}
