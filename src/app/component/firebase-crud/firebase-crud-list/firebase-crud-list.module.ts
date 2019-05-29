import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FirebaseCrudListComponent } from './firebase-crud-list.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: FirebaseCrudListComponent }])
  ],
  exports: [FirebaseCrudListComponent],
  declarations: [
    FirebaseCrudListComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FirebaseCrudListComponentModule {}
