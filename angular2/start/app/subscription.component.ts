import {Component} from '@angular/core'

@Component({
    selector: 'subscription-form',
    templateUrl:'app/subscription.component.html'
})
export class SubscriptionComponent{
    log(control, form){
        console.log(control);
        console.log(form);
    }
 
}