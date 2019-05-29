import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileMoldPage } from './profile-mold.page';
import { ParallaxCommonModule } from '../../common/parallax/parallax.module';

import { ProfileV1Component } from '../../component/profile/profile-v1/profile-v1.component';
import { ProfileV2Component } from '../../component/profile/profile-v2/profile-v2.component';
import { ProfileV3Component } from '../../component/profile/profile-v3/profile-v3.component';
import { ProfileV4Component } from '../../component/profile/profile-v4/profile-v4.component';
import { ProfileV5Component } from '../../component/profile/profile-v5/profile-v5.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ParallaxCommonModule,
    RouterModule.forChild([{ path: '', component: ProfileMoldPage }])
  ],
  declarations: [
    ProfileMoldPage,
    ProfileV1Component,
    ProfileV2Component,
    ProfileV3Component,
    ProfileV4Component,
    ProfileV5Component
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProfileMoldPageModule {}
