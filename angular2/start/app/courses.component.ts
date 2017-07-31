import {Component} from '@angular/core'
import {CourseService} from './course.service'

@Component({
    selector: 'courses',
    template: `
        <h1>{{title}}</h1>
        <ul>
            <li *ngFor="let course of courses">{{course}}</li>
        </ul>

        <ul>
            <li *ngFor="let course of courses2">{{course}}</li>
        </ul>

        <input type="text" autoGrow/>
    `,
    providers:[CourseService],
})

export class CoursesComponent{
    title = 'List of courses';
    courses = ["C# programming", "Learn Java", "System design"];
    courses2 : string[]; 

    constructor(courseService : CourseService){
        this.courses2 = courseService.getCourses();
    }
}