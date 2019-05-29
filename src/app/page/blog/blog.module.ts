import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BlogPage } from './blog.page';
import { ParallaxCommonModule } from '../../common/parallax/parallax.module';

import { BlogPostComponent } from '../../component/blog/blog-post/blog-post.component';
import { BlogTimelineComponent } from '../../component/blog/blog-timeline/blog-timeline.component';
import { BlogListComponent } from '../../component/blog/blog-list/blog-list.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ParallaxCommonModule,
    RouterModule.forChild([{ path: '', component: BlogPage }])
  ],
  declarations: [
    BlogPage,
    BlogPostComponent,
    BlogTimelineComponent,
    BlogListComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BlogPageModule {}
