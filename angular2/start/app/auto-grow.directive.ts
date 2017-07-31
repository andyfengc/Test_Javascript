import {Directive, ElementRef, Renderer} from '@angular/core'

@Directive({
    selector: '[autoGrow]',
    host: {
        '(focus)' : "onFocus()",
        '(blur)' : "onBlur()"
    }
})

export class AutoGrowDirective{
    onFocus(){
        this.r.setElementStyle(this.el.nativeElement, 'width', '200px');
    }

    onBlur(){
        this.r.setElementStyle(this.el.nativeElement, 'width', '50px');
    }

    constructor(private el: ElementRef, private r : Renderer){

    }
}