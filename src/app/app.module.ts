import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { environment } from '@env/environment';
import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { AuthModule } from '@app/auth';
import { HomeModule } from './home/home.module';
import { ShellModule } from './shell/shell.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TableComponent } from './table/table.component';
import { Practice1Component } from './practice1/practice1.component';
import { AravindComponent } from './aravind/aravind.component';
import { KiranComponent } from './kiran/kiran.component';
import { SaiComponent } from './sai/sai.component';
import { CricketComponent } from './cricket/cricket.component';
import { S1Component } from './s1/s1.component';
import { SaipavanComponent } from './saipavan/saipavan.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminComponent } from './admin/admin.component';
import { ButtonComponent } from './button/button.component';
import { ApidataComponent } from './apidata/apidata.component';
import { FrameworkComponent } from './framework/framework.component';
import { UsersService } from './service/users.service';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { Form2Component } from './form2/form2.component';
import { TdfComponent } from './tdf/tdf.component';
import { StorageComponent } from './storage/storage.component';
import { HeaderComponent } from './header/header.component';
import { UiscreenComponent } from './uiscreen/uiscreen.component';
import { SaitejaAuGuard } from './saiteja-au.guard';

@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    IonicModule.forRoot(),
    CoreModule,
    SharedModule,
    ShellModule,
    HomeModule,
    AuthModule,
    AppRoutingModule, // must be imported as the last module as it contains the fallback route
  ],
  declarations: [
    AppComponent,
    TableComponent,
    Practice1Component,
    AravindComponent,
    KiranComponent,
    SaiComponent,
    CricketComponent,
    S1Component,
    SaipavanComponent,
    RegistrationComponent,
    AdminComponent,
    ButtonComponent,
    ApidataComponent,
    FrameworkComponent,
    SignupComponent,
    SigninComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    Form2Component,
    TdfComponent,
    StorageComponent,
    HeaderComponent,
    UiscreenComponent,
  ],
  providers: [UsersService, SaitejaAuGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
