import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  // templateUrl: '/app/nav/nav.component.html'
  template: `
        <nav class="navbar navbar-default">
        <div class="container">
            <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Project name</a>
            </div>
            <div id="navbar" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
              <li class="active"><a href="#">Authors</a></li>
              <li><a [routerLink]="['/courses']">Courses</a></li>
              <li><a [routerLink]="['/favorite']">Favorite</a></li>
              <li><a [routerLink]="['/like']">Like</a></li>
              <li><a [routerLink]="['/zippy']">Zippy</a></li>
           </ul>
            </div><!--/.nav-collapse -->
        </div>
        </nav>
    `
})

export class NavbarComponent {

}