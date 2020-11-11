import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss'],
})
export class StorageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  title: string;
  add() {
    this.title = 'this is local storage ';
    localStorage.setItem('token', this.title);
  }
}
