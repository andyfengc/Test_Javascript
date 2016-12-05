import { Component, OnInit } from '@angular/core'
import { PostService } from './post.service'

@Component({
    selector: 'my-app',
    template: `<h1>Hello angular again</h1>
        <courses></courses>
        <authors></authors>
        <favorite></favorite>
        <like [count]="20"></like>
        <rate [score]="30" ></rate>
        <zippy title="this is a zippy">zippy content....</zippy>
        <subscription-form></subscription-form>
        <wiki></wiki>
    `,
    providers: [PostService]
})

export class AppComponent implements OnInit {
    constructor(private postService: PostService) {
        this.postService.createPost({title:'abc', body: 'bbbbb', userId: 1});
        console.log('created post successfully');
    }

    ngOnInit() {
        this.postService.getPosts().subscribe(posts => {
            console.log(posts);
        })
    }

    onRate($event) {
        console.log('my rate: ' + JSON.stringify($event));
    }
}