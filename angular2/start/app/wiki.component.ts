import { Component, Injectable, OnInit } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx'

@Component({
    selector: 'wiki',
    template: `
        <div>
            Search term: <input type="text" [(ngModel)]="searchTerm" id="searchTerm" name="searchTerm">
            {{searchTerm}}
        </div>
        <div>
            <ul>
                <li *ngFor="let item of items">{{item}}</li>
            </ul>
        </div>
    `
})

export class WikiComponent implements OnInit {
    constructor(private jsonp: Jsonp) {

    }

    items: string[];

    ngOnInit() {
        let wikiUrl = 'http://en.wikipedia.org/w/api.php';

        var keyup = Observable.fromEvent<KeyboardEvent>(document.getElementById("searchTerm"), "keyup")
            .map((e: any) => e.target.value)
            .debounceTime(500)
            .distinctUntilChanged();
        keyup.subscribe(term => {
            console.log('you enter: ' + term);
            let params = new URLSearchParams();
            params.set('search', term); // the user's search value
            params.set('action', 'opensearch');
            params.set('format', 'json');
            params.set('callback', 'JSONP_CALLBACK');
            var result = this.jsonp.get(wikiUrl, { search: params })
                .map(response => <string[]>response.json()[1]);
            result.subscribe(data => this.items = data);
        });
    }
}