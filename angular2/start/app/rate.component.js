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
var RateComponent = (function () {
    function RateComponent() {
        this.score = 10;
        this.isUp = false;
        this.isDown = false;
    }
    RateComponent.prototype.up = function () {
        this.isUp = true;
        this.isDown = false;
        this.score++;
    };
    RateComponent.prototype.down = function () {
        this.isDown = true;
        this.isUp = false;
        this.score--;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], RateComponent.prototype, "score", void 0);
    RateComponent = __decorate([
        core_1.Component({
            selector: 'rate',
            template: "\n        <i \n        class=\"glyphicon glyphicon-chevron-up\"\n        (click)=\"up()\"\n        ></i>\n        {{score}}\n        <i \n        class=\"glyphicon glyphicon-chevron-down\"\n        (click)=\"down()\"></i>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], RateComponent);
    return RateComponent;
}());
exports.RateComponent = RateComponent;
//# sourceMappingURL=rate.component.js.map