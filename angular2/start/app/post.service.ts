import {Injectable} from '@angular/core'
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'
import {Post} from './post.model'

@Injectable()
export class PostService{
    url = 'https://jsonplaceholder.typicode.com/posts';
    constructor(private http: Http){

    }
    getPosts(){
        return this.http.get(this.url)
        .map(response => response.json());
    }

    createPost(post: Post){
        return this.http.post(this.url, JSON.stringify(post))
        .map(response => response.json());        
    }
}