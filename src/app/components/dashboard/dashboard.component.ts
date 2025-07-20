import { Component } from '@angular/core';
import { TotalScheduledCardComponent } from '../total-scheduled-card/total-scheduled-card.component';
import { TopUsageChartComponent } from '../top-usage-chart/top-usage-chart.component';
import { ExecutionHistoryTableComponent } from '../execution-history-table/execution-history-table.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TotalScheduledCardComponent, TopUsageChartComponent, ExecutionHistoryTableComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
