import {async, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {BoatSelectionComponent} from './boat-selection/boat-selection.component';
import {SelectionCardComponent} from './boat-selection/selection-card/selection-card.component';
import {DiscoverSectionComponent} from './discover-section/discover-section.component';
import {DiscoverCardComponent} from './discover-section/discover-card/discover-card.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent, HeaderComponent, BoatSelectionComponent, SelectionCardComponent, DiscoverSectionComponent, DiscoverCardComponent
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'boater'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('boater');
  });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to boater!');
  // });
});
