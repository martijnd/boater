import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DiscoverCardComponent} from './discover-card.component';
import {Card} from './card.model';

describe('DiscoverCardComponent', () => {
  let component: DiscoverCardComponent;
  let fixture: ComponentFixture<DiscoverCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DiscoverCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverCardComponent);
    component = fixture.componentInstance;
    component.card = new Card();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
