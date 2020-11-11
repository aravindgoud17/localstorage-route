import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  // tslint:disable-next-line: member-ordering
  goldPrice = 59000;
  array1 = ['sai', 'aravind', 'vig', 'dd'];
  approved: boolean;
  token: number;
  constructor(private http: HttpClient, public router: Router) {}

  sample1() {
    return this.http.get<any>('https://api.npoint.io/6dac4d8e59bf90f86a8d');
  }
  ngOnInit() {}
  // isLoggedIn(cond:boolean): boolean {
  //   return cond;
  // }
  onSubmit(loginform: any) {
    // console.log(this.loginform.value);
    const stringUsers = localStorage.getItem('users');
    const users = JSON.parse(stringUsers);

    // tslint:disable-next-line: max-line-length
    const userExisted = users.find(
      (u: any) => u.email === loginform.value.email && u.password === loginform.value.password
    );
    // const passwordExisted = users.find((u: any) => u.password === loginform.value.password);

    if (userExisted) {
      localStorage.setItem('token', 'true');
      alert(typeof localStorage.getItem('token'));
      // this.router.navigate(['profile'])
      this.approved = true;

      // console.log(users);
    } else {
      localStorage.removeItem('token');
      alert('wrong username or password');
      // this.router.navigate(['signin'])

      // this.isLoggedIn(false);
      this.approved = false;
    }
    this.router.navigate(['profile']);
  }
}
