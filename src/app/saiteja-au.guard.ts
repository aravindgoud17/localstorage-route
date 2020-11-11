import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
// import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { UsersService } from './service/users.service';

@Injectable({
  providedIn: 'root',
})
export class SaitejaAuGuard implements CanActivate {
  constructor(private userService: UsersService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem('token');
    console.log(token, typeof token);
    // tslint:disable-next-line: triple-equals
    if (token == 'true') {
      this.router.navigate(['profile'], { queryParams: { redirect: state.url }, replaceUrl: true });
      return true;
    } else {
      // window.alert("You don't have permission to view this page");
      this.router.navigate(['/signin'], { queryParams: { redirect: state.url }, replaceUrl: true });
    }
    return false;
  }
  // canActivate() {
  //   // console.log("OnlyLoggedInUsers");

  //   if (this.userService.approved) {
  //     return true;
  //   } else {
  //     // window.alert("You don't have permission to view this page");
  //     return false;
  //   }
  // }
}
