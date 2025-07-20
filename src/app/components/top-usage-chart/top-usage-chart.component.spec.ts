import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopUsageChartComponent } from './top-usage-chart.component';

describe('TopUsageChartComponent', () => {
  let component: TopUsageChartComponent;
  let fixture: ComponentFixture<TopUsageChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopUsageChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopUsageChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
