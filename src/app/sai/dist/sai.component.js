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
exports.SaiComponent = void 0;
var core_1 = require('@angular/core');
var SaiComponent = /** @class */ (function () {
  function SaiComponent() {
    this.covid = [
      {
        img: 'asserts/virat.jpg',
        name: 'virat',
        age: 35,
        testRuns: 42000,
        odiRuns: 2500,
      },
      {
        img: 'asserts/dhoni.jpg',
        name: 'dhoni',
        age: 38,
        testRuns: 50000,
        odiRuns: 25000,
      },
      {
        img: 'asserts/raina.jpg',
        name: 'raina',
        age: 36,
        testRuns: 15000,
        odiRuns: 20000,
      },
    ];
  }
  SaiComponent.prototype.ngOnInit = function () {};
  SaiComponent = __decorate(
    [
      core_1.Component({
        selector: 'app-sai',
        templateUrl: './sai.component.html',
        styleUrls: ['./sai.component.scss'],
      }),
    ],
    SaiComponent
  );
  return SaiComponent;
})();
exports.SaiComponent = SaiComponent;
