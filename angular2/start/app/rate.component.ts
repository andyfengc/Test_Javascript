import {Component, Input} from '@angular/core'

@Component({
    selector: 'rate',
    template: `
        <i 
        class="glyphicon glyphicon-chevron-up"
        (click)="up()"
        ></i>
        {{score}}
        <i 
        class="glyphicon glyphicon-chevron-down"
        (click)="down()"></i>
    `
})

export class RateComponent{
    @Input() score = 10;
    isUp = false;
    isDown = false;
    up(){
        this.isUp = true;
        this.isDown = false;
        this.score++;
    }
    down(){
        this.isDown = true;
        this.isUp = false;
        this.score--;
    }
}