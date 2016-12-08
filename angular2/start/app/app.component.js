"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var post_service_1 = require('./post.service');
var AppComponent = (function () {
    function AppComponent(postService) {
        this.postService = postService;
        this.postService.createPost({ title: 'abc', body: 'bbbbb', userId: 1 });
        console.log('created post successfully');
    }
    AppComponent.prototype.ngOnInit = function () {
        this.postService.getPosts().subscribe(function (posts) {
            console.log(posts);
        });
    };
    AppComponent.prototype.onRate = function ($event) {
        console.log('my rate: ' + JSON.stringify($event));
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>Hello angular again</h1>\n        <courses></courses>\n        <authors></authors>\n        <favorite></favorite>\n        <like [count]=\"20\"></like>\n        <rate [score]=\"30\" ></rate>\n        <zippy title=\"this is a zippy\">zippy content....</zippy>\n        <subscription-form></subscription-form>\n        <wiki></wiki>\n        <router-outlet></router-outlet>\n    ",
            providers: [post_service_1.PostService]
        }), 
        __metadata('design:paramtypes', [post_service_1.PostService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map