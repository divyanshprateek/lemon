import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchbarComponent } from './searchbar.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: SearchbarComponent }])
  ],
  exports: [SearchbarComponent],
  declarations: [SearchbarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SearchbarComponentModule {}
