import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  name = new FormControl('');
  email = new FormControl('');
  result: any;
  ggg: any;

  constructor() {}

  ngOnInit(): void {}

  clear() {
    console.log(this.ggg);
    this.result = name;
    this.name.setValue('');
  }
}
