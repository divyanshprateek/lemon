import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: CardComponent }])
  ],
  exports: [CardComponent],
  declarations: [CardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CardComponentModule {}
