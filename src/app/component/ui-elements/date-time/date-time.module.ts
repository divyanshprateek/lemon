import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DateTimeComponent } from './date-time.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: DateTimeComponent }])
  ],
  exports: [DateTimeComponent],
  declarations: [DateTimeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DateTimeComponentModule {}
