import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'blog',
    template: `
        <h1>Blog details</h1>
        <h2>year: {{year}}</h2>
        <h2>month: {{month}}</h2>
        <a [routerLink]="['/blog']">Back</a>
    `
})

export class BlogComponent {
    year;
    month;
    constructor(private router: ActivatedRoute) {
        this.router.params.subscribe(params => {
            this.year = params['year'];
            this.month = params['month'];
        })
    }


}