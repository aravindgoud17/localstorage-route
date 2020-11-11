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
exports.AppModule = void 0;
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/common/http');
var service_worker_1 = require('@angular/service-worker');
var core_2 = require('@ngx-translate/core');
var angular_1 = require('@ionic/angular');
var environment_1 = require('@env/environment');
var _core_1 = require('@core');
var _shared_1 = require('@shared');
var auth_1 = require('@app/auth');
var home_module_1 = require('./home/home.module');
var shell_module_1 = require('./shell/shell.module');
var app_component_1 = require('./app.component');
var app_routing_module_1 = require('./app-routing.module');
var table_component_1 = require('./table/table.component');
var practice1_component_1 = require('./practice1/practice1.component');
var aravind_component_1 = require('./aravind/aravind.component');
var kiran_component_1 = require('./kiran/kiran.component');
var sai_component_1 = require('./sai/sai.component');
var cricket_component_1 = require('./cricket/cricket.component');
var s1_component_1 = require('./s1/s1.component');
var saipavan_component_1 = require('./saipavan/saipavan.component');
var registration_component_1 = require('./registration/registration.component');
var admin_component_1 = require('./admin/admin.component');
var button_component_1 = require('./button/button.component');
var apidata_component_1 = require('./apidata/apidata.component');
var framework_component_1 = require('./framework/framework.component');
var users_service_1 = require('./service/users.service');
var AppModule = /** @class */ (function () {
  function AppModule() {}
  AppModule = __decorate(
    [
      core_1.NgModule({
        imports: [
          platform_browser_1.BrowserModule,
          service_worker_1.ServiceWorkerModule.register('./ngsw-worker.js', {
            enabled: environment_1.environment.production,
          }),
          forms_1.FormsModule,
          http_1.HttpClientModule,
          core_2.TranslateModule.forRoot(),
          angular_1.IonicModule.forRoot(),
          _core_1.CoreModule,
          _shared_1.SharedModule,
          shell_module_1.ShellModule,
          home_module_1.HomeModule,
          auth_1.AuthModule,
          app_routing_module_1.AppRoutingModule,
        ],
        declarations: [
          app_component_1.AppComponent,
          table_component_1.TableComponent,
          practice1_component_1.Practice1Component,
          aravind_component_1.AravindComponent,
          kiran_component_1.KiranComponent,
          sai_component_1.SaiComponent,
          cricket_component_1.CricketComponent,
          s1_component_1.S1Component,
          saipavan_component_1.SaipavanComponent,
          registration_component_1.RegistrationComponent,
          admin_component_1.AdminComponent,
          button_component_1.ButtonComponent,
          apidata_component_1.ApidataComponent,
          framework_component_1.FrameworkComponent,
        ],
        providers: [users_service_1.UsersService],
        bootstrap: [app_component_1.AppComponent],
      }),
    ],
    AppModule
  );
  return AppModule;
})();
exports.AppModule = AppModule;
