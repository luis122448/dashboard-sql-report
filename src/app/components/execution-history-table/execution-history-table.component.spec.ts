import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutionHistoryTableComponent } from './execution-history-table.component';

describe('ExecutionHistoryTableComponent', () => {
  let component: ExecutionHistoryTableComponent;
  let fixture: ComponentFixture<ExecutionHistoryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExecutionHistoryTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExecutionHistoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
