import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}
  ValidateUser(usernmae: any, password: any) {
    return true;
  }
}
