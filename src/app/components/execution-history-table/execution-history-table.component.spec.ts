import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastExecutionHistoryTableComponent } from './execution-history-table.component';

describe('LastExecutionHistoryTableComponent', () => {
  let component: LastExecutionHistoryTableComponent;
  let fixture: ComponentFixture<LastExecutionHistoryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastExecutionHistoryTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastExecutionHistoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
