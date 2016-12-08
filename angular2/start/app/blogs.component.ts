import { Component } from '@angular/core';

@Component({
    selector: 'blogs',
    template: `
        <h1>Blog router</h1>
        <ul>
            <li *ngFor="let blog of blogs"><a [routerLink]="['/blogs', blog.year,  blog.month]">{{blog.year}} / {{blog.month}}</a></li>
        </ul>
    `
})

export class BlogsComponent {

    blogs = [
        { year: '2016', month: '1' },
        { year: '2016', month: '2' },
        { year: '2016', month: '3' },
        { year: '2016', month: '4' }
    ]
}