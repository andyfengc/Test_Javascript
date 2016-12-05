import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {FavoriteComponent} from './favorite.component'
import {LikeComponent} from './like.component'
import {RateComponent} from './rate.component'
import {ZippyComponent} from './zippy.component'
import {SubscriptionComponent} from './subscription.component'
import {WikiComponent} from './wiki.component'

@NgModule({
  imports:      [BrowserModule, FormsModule, HttpModule, JsonpModule],
  declarations: [AppComponent, CoursesComponent, AuthorsComponent, FavoriteComponent, LikeComponent, RateComponent, ZippyComponent
  , SubscriptionComponent, WikiComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }