import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FirebaseCrudModalComponent } from './firebase-crud-modal.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: FirebaseCrudModalComponent }])
  ],
  exports: [FirebaseCrudModalComponent],
  declarations: [FirebaseCrudModalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [FirebaseCrudModalComponent]
})
export class FirebaseCrudModalComponentModule {}
