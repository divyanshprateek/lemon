import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BlogListComponent } from './blog-list.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: BlogListComponent }])
  ],
  exports: [BlogListComponent],
  declarations: [BlogListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BlogListComponentModule {}
