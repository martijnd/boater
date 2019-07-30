import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-boat-selection',
  templateUrl: './boat-selection.component.html',
  styleUrls: ['./boat-selection.component.scss']
})
export class BoatSelectionComponent implements OnInit {
  backgroundImageUrl = 'url(assets/img/boat-selection.jpg) no-repeat center center fixed';

  constructor() {
  }

  ngOnInit() {
  }

}
