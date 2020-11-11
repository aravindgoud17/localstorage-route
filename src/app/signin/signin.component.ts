import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UsersService } from '@app/service/users.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  loginform = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_.-]+)\\.([a-zA-Z]{2,5})$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '(?=.*[A-Za-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{8,}'
      ),
    ]),
  });

  constructor(public userService: UsersService) {}

  ngOnInit(): void {}
  onSubmit() {
    this.userService.onSubmit(this.loginform);
  }
}
