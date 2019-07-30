import {Component, OnInit} from '@angular/core';
import {Card} from './discover-card/card.model';

@Component({
  selector: 'app-discover-section',
  templateUrl: './discover-section.component.html',
  styleUrls: ['./discover-section.component.scss']
})
export class DiscoverSectionComponent implements OnInit {
  cards: Card[] = [{
    imageUrl: 'url(assets/img/discover-cards/1.jpg)', title: 'Diversity', subtitle: 'Yachts, sailboats and more'
  }, {
    imageUrl: 'url(assets/img/discover-cards/2.jpg)', title: 'Adventures', subtitle: 'Organised travels with accomodations'
  }, {
    imageUrl: 'url(assets/img/discover-cards/3.jpg)', title: 'Experiences', subtitle: 'Let yourself go on your personal vessel'
  }];

  constructor() {
  }

  ngOnInit() {
  }

}
