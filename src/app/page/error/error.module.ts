import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ErrorPage } from './error.page';
import { ParallaxCommonModule } from '../../common/parallax/parallax.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ParallaxCommonModule,
    RouterModule.forChild([{ path: '', component: ErrorPage }])
  ],
  declarations: [
    ErrorPage
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ErrorPageModule {}
