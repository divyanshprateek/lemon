import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FirebaseCrudPage } from './firebase-crud.page';
import { ParallaxCommonModule } from '../../common/parallax/parallax.module';
import { FirebaseCrudListComponent } from '../../component/firebase-crud/firebase-crud-list/firebase-crud-list.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ParallaxCommonModule,
    RouterModule.forChild([{ path: '', component: FirebaseCrudPage }])
  ],
  declarations: [
    FirebaseCrudPage,
    FirebaseCrudListComponent
  ],
  entryComponents: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FirebaseCrudPageModule {}
