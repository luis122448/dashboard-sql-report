import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalScheduledCardComponent } from './total-scheduled-card.component';

describe('TotalScheduledCardComponent', () => {
  let component: TotalScheduledCardComponent;
  let fixture: ComponentFixture<TotalScheduledCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalScheduledCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalScheduledCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
