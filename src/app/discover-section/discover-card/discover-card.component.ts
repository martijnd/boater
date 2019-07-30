import {Component, Input, OnInit} from '@angular/core';
import {Card} from './card.model';

@Component({
  selector: 'app-discover-card',
  templateUrl: './discover-card.component.html',
  styleUrls: ['./discover-card.component.scss']
})
export class DiscoverCardComponent implements OnInit {
  @Input() card: Card;

  constructor() {
  }

  ngOnInit() {
  }

}
