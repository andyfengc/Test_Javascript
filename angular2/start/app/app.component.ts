import {Component} from '@angular/core'

 
@Component({
    selector: 'my-app',
    template: `<h1>Hello angular again</h1>
        <courses></courses>
        <authors></authors>
        <favorite></favorite>
        <like [count]="20"></like>
        <rate [score]="30" ></rate>
        <zippy title="this is a zippy">zippy content....</zippy>
    `
})
export class AppComponent{
    onRate($event){
        console.log('my rate: ' + JSON.stringify($event));
    }
}