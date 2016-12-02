import {Component, Input, EventEmitter, Output} from '@angular/core'

@Component({
    selector: 'rate',
    template: `
        <div class="rate">
            <i 
            class="glyphicon glyphicon-chevron-up"
            [class.highlighted]='isUp'
            (click)="up()"
            ></i>
            {{score}}
            <i 
            class="glyphicon glyphicon-chevron-down"
            [class.highlighted]='isDown'
            (click)="down()"></i>
        </div>
    `,
    styles:[
        `
        .rate{
            width:20px;
        }
        .highlighted{
            color: orange;
            font-weight: bold;
        }
        `
    ]
})

export class RateComponent{
    @Input() score = 10;
    @Output() rate = new EventEmitter();

    isUp = false;
    isDown = false;
    myRate = 0;
    
    up(){
        this.isUp = true;
        this.isDown = false;
        this.myRate = 1;
        this.score++;
        this.rate.emit({myRate: this.myRate});
    }
    down(){
        this.isDown = true;
        this.isUp = false;
        this.myRate = -1;
        this.score--;
        this.rate.emit({myRate: this.myRate});
    }
}