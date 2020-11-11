import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(public srvc: LoginService, public rtr: Router, private fb: FormBuilder) {}

  ngOnInit(): void {}
  loginfrm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(2)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });
  CheckUser() {
    console.log(this.loginfrm);
    if (this.loginfrm.valid) {
      console.log('inputs are valid');
    }
    // this.loginfrm.value

    // var res = this.srvc.ValidateUser(this.loginfrm.value["username"], this.loginfrm.value["password"]);
    // console.log(res);
    // if (res) {
    //   // this.rtr.navigate(["sai"]);
    // else {
    //   alert("invalid user")
    // }
  }
}
