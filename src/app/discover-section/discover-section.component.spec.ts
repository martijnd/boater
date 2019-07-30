import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DiscoverSectionComponent} from './discover-section.component';
import {DiscoverCardComponent} from './discover-card/discover-card.component';

describe('DiscoverSectionComponent', () => {
  let component: DiscoverSectionComponent;
  let fixture: ComponentFixture<DiscoverSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DiscoverSectionComponent, DiscoverCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
