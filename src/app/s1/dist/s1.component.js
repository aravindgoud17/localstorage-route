'use strict';
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
exports.__esModule = true;
exports.S1Component = void 0;
var core_1 = require('@angular/core');
var S1Component = /** @class */ (function () {
  function S1Component(abc) {
    this.abc = abc;
  }
  S1Component.prototype.ngOnInit = function () {
    var _this = this;
    this.abc.sample1().subscribe(function (data) {
      console.log(data);
      _this.name = data.name;
      _this.phone = data.mobile;
      _this.gPrice = _this.abc.goldPrice;
      _this.pens = _this.abc.array1;
    });
  };
  S1Component = __decorate(
    [
      core_1.Component({
        selector: 'app-s1',
        templateUrl: './s1.component.html',
        styleUrls: ['./s1.component.scss'],
      }),
    ],
    S1Component
  );
  return S1Component;
})();
exports.S1Component = S1Component;
