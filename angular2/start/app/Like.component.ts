import {Component, Input} from "@angular/core"

@Component({
    selector: "like",
    template: `
        <i 
        class="glyphicon"
        [class.glyphicon-heart]="liked"
        [class.glyphicon-heart-empty]="!liked"
        (click) = "like()"
        ></i>{{count}}
    `,
    styles: [
        `.glyphicon-heart{
            color: pink
          }`
        ]
})

export class LikeComponent{
    @Input() count = 10;
    liked = false;
    like(){
        this.liked = !this.liked;
        if (this.liked){
            this.count++;
        }
        else{
            this.count--;
        }
    }
}

