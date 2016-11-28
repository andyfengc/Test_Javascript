import {Component} from '@angular/core'

@Component({
    selector: 'courses',
    template: `
        <h1>{{title}}</h1>
    `
})

export class CoursesComponent{
    title = 'List of courses';
    list = ['C# programming', "Learn Java", "System design"]
}