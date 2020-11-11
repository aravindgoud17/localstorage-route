import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { TableComponent } from './table/table.component';
import { Practice1Component } from './practice1/practice1.component';
import { AravindComponent } from './aravind/aravind.component';
import { KiranComponent } from './kiran/kiran.component';
import { SaiComponent } from './sai/sai.component';
import { CricketComponent } from './cricket/cricket.component';
import { SaipavanComponent } from './saipavan/saipavan.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminComponent } from './admin/admin.component';
import { ButtonComponent } from './button/button.component';
import { ApidataComponent } from './apidata/apidata.component';
import { FrameworkComponent } from './framework/framework.component';
import { S1Component } from './s1/s1.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './auth/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { Form2Component } from './form2/form2.component';
import { TdfComponent } from './tdf/tdf.component';
import { StorageComponent } from './storage/storage.component';
import { HeaderComponent } from './header/header.component';
import { UiscreenComponent } from './uiscreen/uiscreen.component';
import { SaitejaAuGuard } from './saiteja-au.guard';

const routes: Routes = [
  { path: 'api', component: ApidataComponent },
  { path: 'framework', component: FrameworkComponent },
  { path: 'kiran', component: KiranComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'practice1', component: Practice1Component },
  { path: 'button', component: ButtonComponent },
  { path: 'table', component: TableComponent },
  { path: 'sai', component: SaiComponent },
  { path: 'aravind', component: AravindComponent },
  { path: 'cricket', component: CricketComponent },
  { path: 'saipavan', component: SaipavanComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [SaitejaAuGuard] },
  { path: 'form2', component: Form2Component },
  { path: 'tdf', component: TdfComponent },
  { path: 'storage', component: StorageComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'uiscreen', component: UiscreenComponent },
  { path: 's1', component: S1Component },

  Shell.childRoutes([{ path: 'about', loadChildren: () => import('./about/about.module').then((m) => m.AboutModule) }]),
  // Fallback when no prior route is matched

  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
