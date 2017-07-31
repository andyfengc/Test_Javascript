"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var courses_component_1 = require("./courses.component");
var authors_component_1 = require("./authors.component");
var favorite_component_1 = require("./favorite.component");
var like_component_1 = require("./like.component");
var rate_component_1 = require("./rate.component");
var zippy_component_1 = require("./zippy.component");
var subscription_component_1 = require("./subscription.component");
var wiki_component_1 = require("./wiki.component");
var blogs_component_1 = require("./blogs.component");
var blog_component_1 = require("./blog.component");
var navbar_component_1 = require("./nav/navbar.component");
var auto_grow_directive_1 = require("./auto-grow.directive");
var appRoutes = [
    { path: 'blogs', component: blogs_component_1.BlogsComponent },
    { path: 'blog/:year/:month', component: blog_component_1.BlogComponent },
    { path: 'courses', component: courses_component_1.CoursesComponent },
    { path: 'favorite', component: favorite_component_1.FavoriteComponent },
    { path: 'like', component: like_component_1.LikeComponent },
    { path: 'rate', component: rate_component_1.RateComponent },
    { path: 'zippy', component: zippy_component_1.ZippyComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            router_1.RouterModule.forRoot(appRoutes)],
        declarations: [app_component_1.AppComponent,
            courses_component_1.CoursesComponent,
            authors_component_1.AuthorsComponent,
            favorite_component_1.FavoriteComponent,
            like_component_1.LikeComponent,
            rate_component_1.RateComponent,
            zippy_component_1.ZippyComponent,
            subscription_component_1.SubscriptionComponent,
            wiki_component_1.WikiComponent,
            blogs_component_1.BlogsComponent,
            blog_component_1.BlogComponent,
            navbar_component_1.NavbarComponent,
            auto_grow_directive_1.AutoGrowDirective
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map