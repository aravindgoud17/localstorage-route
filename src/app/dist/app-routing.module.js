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
exports.AppRoutingModule = void 0;
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var shell_service_1 = require('@app/shell/shell.service');
var table_component_1 = require('./table/table.component');
var practice1_component_1 = require('./practice1/practice1.component');
var aravind_component_1 = require('./aravind/aravind.component');
var kiran_component_1 = require('./kiran/kiran.component');
var sai_component_1 = require('./sai/sai.component');
var cricket_component_1 = require('./cricket/cricket.component');
var saipavan_component_1 = require('./saipavan/saipavan.component');
var registration_component_1 = require('./registration/registration.component');
var admin_component_1 = require('./admin/admin.component');
var button_component_1 = require('./button/button.component');
var apidata_component_1 = require('./apidata/apidata.component');
var framework_component_1 = require('./framework/framework.component');
var s1_component_1 = require('./s1/s1.component');
var routes = [
  { path: 'api', component: apidata_component_1.ApidataComponent },
  { path: 'framework', component: framework_component_1.FrameworkComponent },
  { path: 'kiran', component: kiran_component_1.KiranComponent },
  { path: 'admin', component: admin_component_1.AdminComponent },
  { path: 'registration', component: registration_component_1.RegistrationComponent },
  { path: 'practice1', component: practice1_component_1.Practice1Component },
  { path: 'button', component: button_component_1.ButtonComponent },
  { path: 'table', component: table_component_1.TableComponent },
  { path: 'sai', component: sai_component_1.SaiComponent },
  { path: 'aravind', component: aravind_component_1.AravindComponent },
  { path: 'cricket', component: cricket_component_1.CricketComponent },
  { path: 'saipavan', component: saipavan_component_1.SaipavanComponent },
  { path: 's1', component: s1_component_1.S1Component },
  shell_service_1.Shell.childRoutes([
    {
      path: 'about',
      loadChildren: function () {
        return Promise.resolve()
          .then(function () {
            return require('./about/about.module');
          })
          .then(function (m) {
            return m.AboutModule;
          });
      },
    },
  ]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
  function AppRoutingModule() {}
  AppRoutingModule = __decorate(
    [
      core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes, { preloadingStrategy: router_1.PreloadAllModules })],
        exports: [router_1.RouterModule],
        providers: [],
      }),
    ],
    AppRoutingModule
  );
  return AppRoutingModule;
})();
exports.AppRoutingModule = AppRoutingModule;
