import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingRedirectComponent } from './views/loading-redirect/loading-redirect.component';
import { LoginPageComponent } from './views/login-page/login-page.component';
import { LangpipePipe } from './pipe/langpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoadingRedirectComponent,
    LoginPageComponent,
    LangpipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
