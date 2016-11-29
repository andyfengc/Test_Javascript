import {Component} from "@angular/core"

import {AuthorsService} from "./authors.service"

@Component({
    selector: 'authors',
    template: `
        <h1>{{title}}</h1>
        <ul>
            <li *ngFor="let author of authors">{{author}}</li>
        </ul>
    `,
    providers: [AuthorsService]
})

export class AuthorsComponent{
    title = "List of authors";
    authors;
    constructor(authorService: AuthorsService){
        this.authors = authorService.getAuthors();
    }
}