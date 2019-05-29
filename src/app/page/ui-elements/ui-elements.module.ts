import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UiElementsPage } from './ui-elements.page';
import { ParallaxCommonModule } from '../../common/parallax/parallax.module';

import { ParallaxCommon } from '../../common/parallax/parallax.common';

import { ActionSheetComponent } from '../../component/ui-elements/action-sheet/action-sheet.component';
import { AlertComponent } from '../../component/ui-elements/alert/alert.component';
import { BadgeComponent } from '../../component/ui-elements/badge/badge.component';
import { ButtonComponent } from '../../component/ui-elements/button/button.component';
import { CardComponent } from '../../component/ui-elements/card/card.component';
import { CheckboxComponent } from '../../component/ui-elements/checkbox/checkbox.component';
import { DateTimeComponent } from '../../component/ui-elements/date-time/date-time.component';
import { FabComponent } from '../../component/ui-elements/fab/fab.component';
import { InfiniteScrollComponent } from '../../component/ui-elements/infinite-scroll/infinite-scroll.component';
import { InputComponent } from '../../component/ui-elements/input/input.component';
import { ListComponent } from '../../component/ui-elements/list/list.component';
import { LoadingComponent } from '../../component/ui-elements/loading/loading.component';
import { ModalComponent } from '../../component/ui-elements/modal/modal.component';
import { RangeComponent } from '../../component/ui-elements/range/range.component';
import { RefresherComponent } from '../../component/ui-elements/refresher/refresher.component';
import { SearchbarComponent } from '../../component/ui-elements/searchbar/searchbar.component';
import { SegmentComponent } from '../../component/ui-elements/segment/segment.component';
import { SelectComponent } from '../../component/ui-elements/select/select.component';
import { SpinnerComponent } from '../../component/ui-elements/spinner/spinner.component';
import { ToastComponent } from '../../component/ui-elements/toast/toast.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ParallaxCommonModule,
    RouterModule.forChild([{ path: '', component: UiElementsPage }])
  ],
  declarations: [
    UiElementsPage,
    ActionSheetComponent,
    AlertComponent,
    BadgeComponent,
    ButtonComponent,
    CardComponent,
    CheckboxComponent,
    DateTimeComponent,
    FabComponent,
    InfiniteScrollComponent,
    InputComponent,
    ListComponent,
    LoadingComponent,
    ModalComponent,
    RangeComponent,
    RefresherComponent,
    SearchbarComponent,
    SegmentComponent,
    SelectComponent,
    SpinnerComponent,
    ToastComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UiElementsPageModule {}
