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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var WikiComponent = (function () {
    function WikiComponent(jsonp) {
        this.jsonp = jsonp;
    }
    WikiComponent.prototype.ngOnInit = function () {
        var _this = this;
        var wikiUrl = 'http://en.wikipedia.org/w/api.php';
        var keyup = Rx_1.Observable.fromEvent(document.getElementById("searchTerm"), "keyup")
            .map(function (e) { return e.target.value; })
            .debounceTime(500)
            .distinctUntilChanged();
        keyup.subscribe(function (term) {
            console.log('you enter: ' + term);
            var params = new http_1.URLSearchParams();
            params.set('search', term); // the user's search value
            params.set('action', 'opensearch');
            params.set('format', 'json');
            params.set('callback', 'JSONP_CALLBACK');
            var result = _this.jsonp.get(wikiUrl, { search: params })
                .map(function (response) { return response.json()[1]; });
            result.subscribe(function (data) { return _this.items = data; });
        });
    };
    return WikiComponent;
}());
WikiComponent = __decorate([
    core_1.Component({
        selector: 'wiki',
        template: "\n        <div>\n            Search term: <input type=\"text\" [(ngModel)]=\"searchTerm\" id=\"searchTerm\" name=\"searchTerm\">\n            {{searchTerm}}\n        </div>\n        <div>\n            <ul>\n                <li *ngFor=\"let item of items\">{{item}}</li>\n            </ul>\n        </div>\n    "
    }),
    __metadata("design:paramtypes", [http_1.Jsonp])
], WikiComponent);
exports.WikiComponent = WikiComponent;
//# sourceMappingURL=wiki.component.js.map