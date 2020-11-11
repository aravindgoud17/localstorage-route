import { Component, OnInit } from '@angular/core';
import { UsersService } from '@app/service/users.service';

@Component({
  selector: 'app-s1',
  templateUrl: './s1.component.html',
  styleUrls: ['./s1.component.scss'],
})
export class S1Component implements OnInit {
  constructor(private abc: UsersService) {}
  pens: any;
  gPrice: any;
  name: any;
  phone: any;
  ngOnInit(): void {
    this.abc.sample1().subscribe((data) => {
      console.log(data);
      this.name = data.name;
      this.phone = data.mobile;

      this.gPrice = this.abc.goldPrice;
      this.pens = this.abc.array1;
    });
  }
}
