import {Component} from "@angular/core";
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
    selector: 'courses',
    template: `
        <h1>courses list</h1>
    `
})
export class CoursesComponent{
    constructor(private router : ActivatedRoute){
        this.router.params.map(res => res).subscribe(params => {
            console.log('param - ' + params['id']);
        })
    }
}