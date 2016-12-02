import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {FavoriteComponent} from './favorite.component'
import {LikeComponent} from './like.component'
import {RateComponent} from './rate.component'
import {ZippyComponent} from './zippy.component'


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [AppComponent, CoursesComponent, AuthorsComponent, FavoriteComponent, LikeComponent, RateComponent, ZippyComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }