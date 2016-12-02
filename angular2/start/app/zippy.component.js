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
var ZippyComponent = (function () {
    function ZippyComponent() {
        this.isExpanded = false;
        this.myAction = new core_1.EventEmitter();
    }
    ZippyComponent.prototype.expand = function () {
        this.isExpanded = !this.isExpanded;
        this.myAction.emit({ myAction: this.isExpanded ? 'expand' : 'collapse' });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ZippyComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ZippyComponent.prototype, "isExpanded", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ZippyComponent.prototype, "myAction", void 0);
    ZippyComponent = __decorate([
        core_1.Component({
            selector: 'zippy',
            template: "\n        <div>\n            <div (click)='expand()' class=\"panel panel-default\">\n                {{title}}\n                <i\n                class='glyphicon pull-right'\n                [ngClass]=\"{\n                    'glyphicon-chevron-up': !isExpanded,\n                    'glyphicon-chevron-down': isExpanded\n                }\"\n                ></i>\n            </div>\n            <div *ngIf='isExpanded' class='panel-body'>\n                <ng-content></ng-content>\n            </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ZippyComponent);
    return ZippyComponent;
}());
exports.ZippyComponent = ZippyComponent;
//# sourceMappingURL=zippy.component.js.map