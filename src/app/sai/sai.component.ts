import { Component, OnInit } from '@angular/core';
import { VirtualAction } from 'rxjs';

@Component({
  selector: 'app-sai',
  templateUrl: './sai.component.html',
  styleUrls: ['./sai.component.scss'],
})
export class SaiComponent implements OnInit {
  covid = [
    {
      img: 'asserts/virat.jpg',
      name: 'virat',
      age: 35,
      testRuns: 42000,
      odiRuns: 2500,
    },
    {
      img: 'asserts/dhoni.jpg',
      name: 'dhoni',
      age: 38,
      testRuns: 50000,
      odiRuns: 25000,
    },
    {
      img: 'asserts/raina.jpg',
      name: 'raina',
      age: 36,
      testRuns: 15000,
      odiRuns: 20000,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
