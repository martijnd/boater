import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-selection-card',
  templateUrl: './selection-card.component.html',
  styleUrls: ['./selection-card.component.scss']
})
export class SelectionCardComponent implements OnInit {

  harbors = [
    {
      id: 0,
      name: 'Amsterdam',
    },
    {
      id: 1,
      name: 'Rotterdam'
    },
    {
      id: 2,
      name: 'Giethoorn'
    }
  ];

  adults = Array(8).fill(0).map((x, i) => 8 - i);
  children = Array(8).fill(0).map((x, i) => 8 - i);

  constructor() {
  }

  ngOnInit() {
  }

}
