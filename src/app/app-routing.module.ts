import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tabs', pathMatch: 'full' },
  { path: '', loadChildren: './page/tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './page/login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './page/signup/signup.module#SignupPageModule' },
  { path: 'forgot', loadChildren: './page/forgot/forgot.module#ForgotPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
