import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HomeComponent} from './components/home/home.component';
import {ProfileComponent} from './components/profile/profile.component';
import { AppRoutingModule } from './app.routing.module';
import {AUTH_PROVIDERS} from 'angular2-jwt';
import {Auth} from './services/auth.service';
import {AuthGuard} from './auth.guard';


import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [ AppComponent, HomeComponent, ProfileComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AUTH_PROVIDERS, Auth, AuthGuard]
})
export class AppModule { }
