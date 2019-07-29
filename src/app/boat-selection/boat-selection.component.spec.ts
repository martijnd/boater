import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BoatSelectionComponent } from "./boat-selection.component";
import { SelectionCardComponent } from "./selection-card/selection-card.component";

describe("BoatSelectionComponent", () => {
  let component: BoatSelectionComponent;
  let fixture: ComponentFixture<BoatSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BoatSelectionComponent, SelectionCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoatSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
