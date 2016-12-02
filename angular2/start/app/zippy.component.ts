import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector: 'zippy',
    template: `
        <div>
            <div (click)='expand()' class="panel panel-default">
                {{title}}
                <i
                class='glyphicon pull-right'
                [ngClass]="{
                    'glyphicon-chevron-up': !isExpanded,
                    'glyphicon-chevron-down': isExpanded
                }"
                ></i>
            </div>
            <div *ngIf='isExpanded' class='panel-body'>
                <ng-content></ng-content>
            </div>
        </div>
    `
})

export class ZippyComponent{
    @Input() title;
    @Input() isExpanded = false;
    @Output() myAction = new EventEmitter();

    expand(){
        this.isExpanded = !this.isExpanded;
        this.myAction.emit({myAction: this.isExpanded? 'expand': 'collapse'})
    }
}