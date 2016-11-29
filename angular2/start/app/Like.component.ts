import {Component} from "@angular/core"

@Component({
    selector: "like",
    template: `
        <i 
        class="glyphicon"
        [class.glyphicon-heart]="liked"
        ></i>
    `
})

export class LikeComponent{

}

