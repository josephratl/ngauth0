import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HomeComponent} from './components/home/home.component';
import {ProfileComponent} from './components/profile/profile.component';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [ AppComponent, HomeComponent, ProfileComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
