"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BlogsComponent = (function () {
    function BlogsComponent() {
        this.blogs = [
            { year: '2016', month: '1' },
            { year: '2016', month: '2' },
            { year: '2016', month: '3' },
            { year: '2016', month: '4' }
        ];
    }
    return BlogsComponent;
}());
BlogsComponent = __decorate([
    core_1.Component({
        selector: 'blogs',
        template: "\n        <h1>Blog router</h1>\n        <ul>\n            <li *ngFor=\"let blog of blogs\"><a [routerLink]=\"['/blogs', blog.year,  blog.month]\">{{blog.year}} / {{blog.month}}</a></li>\n        </ul>\n    "
    })
], BlogsComponent);
exports.BlogsComponent = BlogsComponent;
//# sourceMappingURL=blogs.component.js.map