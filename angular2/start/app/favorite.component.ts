import {Component, Input} from "@angular/core"

@Component({
    selector: "favorite",
    template: `
        <i class="glyphicon" 
        [class.glyphicon-star]="isFavorite"
        [class.glyphicon-star-empty]="!isFavorite"
        (click) ="onClick()"
        ></i>
    `
})
export class FavoriteComponent{
    @Input() isFavorite = false;
    onClick(){
        this.isFavorite = !this.isFavorite;
    }
}