import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab-home',
        children: [
          {
            path: '',
            loadChildren: '../tab-home/tab-home.module#TabHomePageModule'
          },
          {
            path: 'fragment',
            loadChildren: '../fragment/fragment.module#FragmentPageModule'
          },
          {
            path: 'ui-elements',
            loadChildren: '../ui-elements/ui-elements.module#UiElementsPageModule'
          },
          {
            path: 'parallax',
            loadChildren: '../parallax/parallax.module#ParallaxPageModule'
          },
          {
            path: 'drop-drag',
            loadChildren: '../drop-drag/drop-drag.module#DropDragPageModule'
          },
          {
            path: 'firebase-crud',
            loadChildren: '../firebase-crud/firebase-crud.module#FirebaseCrudPageModule'
          },
          {
            path: 'slides',
            loadChildren: '../slides/slides.module#SlidesPageModule'
          },
          {
            path: 'gallery',
            loadChildren: '../gallery/gallery.module#GalleryPageModule'
          },
          {
            path: 'blog',
            loadChildren: '../blog/blog.module#BlogPageModule'
          },
          {
            path: 'login-mold',
            loadChildren: '../login-mold/login-mold.module#LoginMoldPageModule'
          },
          {
            path: 'profile-mold',
            loadChildren: '../profile-mold/profile-mold.module#ProfileMoldPageModule'
          },
          {
            path: 'register',
            loadChildren: '../register/register.module#RegisterPageModule'
          },
          {
            path: 'error',
            loadChildren: '../error/error.module#ErrorPageModule'
          },
          {
            path: 'admob',
            loadChildren: '../admob/admob.module#AdmobPageModule'
          },
          {
            path: 'facebook',
            loadChildren: '../ready-app/facebook/facebook.module#FacebookPageModule'
          },
          {
            path: 'facebook-comment',
            loadChildren: '../ready-app/facebook/facebook-comment/facebook-comment.module#FacebookCommentPageModule'
          },
          {
            path: 'instagram',
            loadChildren: '../ready-app/instagram/instagram.module#InstagramPageModule'
          },
          {
            path: 'instagram-comment',
            loadChildren: '../ready-app/instagram/instagram-comment/instagram-comment.module#InstagramCommentPageModule'
          },
          {
            path: 'youtube',
            loadChildren: '../ready-app/youtube/youtube.module#YoutubePageModule'
          },
          {
            path: 'youtube-favorite',
            loadChildren: '../ready-app/youtube/youtube-favorite/youtube-favorite.module#YoutubeFavoritePageModule'
          },
          {
            path: 'youtube-detail',
            loadChildren: '../ready-app/youtube/youtube-detail/youtube-detail.module#YoutubeDetailPageModule'
          },
          {
            path: 'unsplash',
            loadChildren: '../ready-app/unsplash/unsplash.module#UnsplashPageModule'
          },
          {
            path: 'unsplash-favorite',
            loadChildren: '../ready-app/unsplash/unsplash-favorite/unsplash-favorite.module#UnsplashFavoritePageModule'
          },
          {
            path: 'unsplash-collection',
            loadChildren: '../ready-app/unsplash/unsplash-collection/unsplash-collection.module#UnsplashCollectionPageModule'
          },
          {
            path: 'unsplash-category-detail',
            loadChildren: '../ready-app/unsplash/unsplash-category-detail/unsplash-category-detail.module#UnsplashCategoryDetailPageModule'
          },
          {
            path: 'wordpress',
            loadChildren: '../ready-app/wordpress/wordpress.module#WordpressPageModule'
          },
          {
            path: 'wordpress-category',
            loadChildren: '../ready-app/wordpress/wordpress-category/wordpress-category.module#WordpressCategoryPageModule'
          },
          {
            path: 'wordpress-posts',
            loadChildren: '../ready-app/wordpress/wordpress-posts/wordpress-posts.module#WordpressPostsPageModule'
          },
          {
            path: 'wordpress-detail',
            loadChildren: '../ready-app/wordpress/wordpress-detail/wordpress-detail.module#WordpressDetailPageModule'
          },
          {
            path: 'wordpress-favorite',
            loadChildren: '../ready-app/wordpress/wordpress-favorite/wordpress-favorite.module#WordpressFavoritePageModule'
          },
          {
            path: 'rss',
            loadChildren: '../ready-app/rss/rss.module#RssPageModule'
          },
          {
            path: 'rss-home',
            loadChildren: '../ready-app/rss/rss-home/rss-home.module#RssHomePageModule'
          },
          {
            path: 'rss-favorite',
            loadChildren: '../ready-app/rss/rss-favorite/rss-favorite.module#RssFavoritePageModule'
          },
        ]
      },
      {
        path: 'tab-setting',
        children: [
          {
            path: '',
            loadChildren: '../tab-setting/tab-setting.module#TabSettingPageModule'
          }
        ]
      },
      {
        path: 'tab-profile',
        children: [
          {
            path: '',
            loadChildren: '../tab-profile/tab-profile.module#TabProfilePageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab-home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab-home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
