import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

var AngularAlphaService = /** @class */ (function () {
    function AngularAlphaService() {
    }
    AngularAlphaService.ɵprov = ɵɵdefineInjectable({ factory: function AngularAlphaService_Factory() { return new AngularAlphaService(); }, token: AngularAlphaService, providedIn: "root" });
    AngularAlphaService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], AngularAlphaService);
    return AngularAlphaService;
}());

var AngularAlphaComponent = /** @class */ (function () {
    function AngularAlphaComponent() {
    }
    AngularAlphaComponent.prototype.ngOnInit = function () {
    };
    AngularAlphaComponent = __decorate([
        Component({
            selector: 'lib-angular-alpha',
            template: "\n    <p>\n      angular-alpha works!\n    </p>\n  "
        })
    ], AngularAlphaComponent);
    return AngularAlphaComponent;
}());

var AngularAlphaModule = /** @class */ (function () {
    function AngularAlphaModule() {
    }
    AngularAlphaModule = __decorate([
        NgModule({
            declarations: [AngularAlphaComponent],
            imports: [],
            exports: [AngularAlphaComponent]
        })
    ], AngularAlphaModule);
    return AngularAlphaModule;
}());

/*
 * Public API Surface of angular-alpha
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AngularAlphaComponent, AngularAlphaModule, AngularAlphaService };
//# sourceMappingURL=angular-alpha.js.map
