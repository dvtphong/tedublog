import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoyaltyMonthComponent } from './royalty-month.component';

describe('RoyaltyMonthComponent', () => {
  let component: RoyaltyMonthComponent;
  let fixture: ComponentFixture<RoyaltyMonthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoyaltyMonthComponent]
    });
    fixture = TestBed.createComponent(RoyaltyMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
