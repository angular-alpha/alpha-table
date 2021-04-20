import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

let AngularAlphaService = class AngularAlphaService {
    constructor() {
    }
};
AngularAlphaService.ɵprov = ɵɵdefineInjectable({ factory: function AngularAlphaService_Factory() { return new AngularAlphaService(); }, token: AngularAlphaService, providedIn: "root" });
AngularAlphaService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AngularAlphaService);

let AngularAlphaComponent = class AngularAlphaComponent {
    constructor() { }
    ngOnInit() {
    }
};
AngularAlphaComponent = __decorate([
    Component({
        selector: 'lib-angular-alpha',
        template: `
    <p>
      angular-alpha works!
    </p>
  `
    })
], AngularAlphaComponent);

let AngularAlphaModule = class AngularAlphaModule {
};
AngularAlphaModule = __decorate([
    NgModule({
        declarations: [AngularAlphaComponent],
        imports: [],
        exports: [AngularAlphaComponent]
    })
], AngularAlphaModule);

/*
 * Public API Surface of angular-alpha
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AngularAlphaComponent, AngularAlphaModule, AngularAlphaService };
//# sourceMappingURL=angular-alpha.js.map
