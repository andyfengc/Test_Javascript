import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {FavoriteComponent} from './favorite.component'
import {LikeComponent} from './like.component'
import {RateComponent} from './rate.component'
import {ZippyComponent} from './zippy.component'
import {SubscriptionComponent} from './subscription.component'
import {WikiComponent} from './wiki.component'
import {BlogsComponent} from './blogs.component'
import {BlogComponent} from './blog.component'
import {NavbarComponent} from './nav/navbar.component'

import {AutoGrowDirective} from './auto-grow.directive'

const appRoutes: Routes = [
  {path: 'blogs', component: BlogsComponent},
  {path: 'blog/:year/:month', component: BlogComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'favorite', component: FavoriteComponent},
  {path: 'like', component: LikeComponent},
  {path: 'rate', component: RateComponent},
  {path: 'zippy', component: ZippyComponent}
]

@NgModule({
  imports:      [BrowserModule
    , FormsModule
    , HttpModule
    , JsonpModule
    , RouterModule.forRoot(appRoutes)],
  declarations: [AppComponent
    , CoursesComponent
    , AuthorsComponent
    , FavoriteComponent
    , LikeComponent
    , RateComponent
    , ZippyComponent
    , SubscriptionComponent
    , WikiComponent
    , BlogsComponent
    , BlogComponent
    , NavbarComponent
    , AutoGrowDirective
     ],
    bootstrap: [AppComponent]
})
export class AppModule { }