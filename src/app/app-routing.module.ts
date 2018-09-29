import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from './views/login-page/login-page.component';
import {LoadingRedirectComponent} from './views/loading-redirect/loading-redirect.component';

const routes: Routes = [
  {path: 'login_redirect', component: LoadingRedirectComponent, children: [{path: '**', component: LoadingRedirectComponent}]},
  {path: 'login_static/target/:target', component: LoginPageComponent},
  {path: '**', component: LoadingRedirectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
