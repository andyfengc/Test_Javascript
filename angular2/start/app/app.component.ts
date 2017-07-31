import { Component, OnInit } from '@angular/core'
import { PostService } from './post.service'

@Component({
    selector: 'my-app',
    template: `<h1>Hello angular</h1>
        <navbar></navbar>
        <router-outlet></router-outlet>

        <zippy title="this is a zippy">zippy content....</zippy>
        <subscription-form></subscription-form>
        <wiki></wiki>
        <favorite [isFavorite]="true"></favorite>
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