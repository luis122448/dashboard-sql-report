import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TotalScheduledCardComponent } from '../total-scheduled-card/total-scheduled-card.component';
import { TopUsageChartComponent } from '../top-usage-chart/top-usage-chart.component';
import { ExecutionHistoryTableComponent } from '../execution-history-table/execution-history-table.component';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    TotalScheduledCardComponent,
    TopUsageChartComponent,
    ExecutionHistoryTableComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private filterService: FilterService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const companyId = params.get('companyId');
      if (companyId) {
        try {
          const decodedIdStr = atob(companyId);
          const decodedId = Number(decodedIdStr);
          if (decodedId === -1) {
            this.filterService.setSelectedCompany(null);
          } else {
            this.filterService.setSelectedCompany(decodedId);
          }
        } catch (e) {
          console.error('Error decoding companyId from URL', e);
          this.filterService.setSelectedCompany(null); // Fallback to all
        }
      } else {
        this.filterService.setSelectedCompany(null); // No param, show all
      }
    });
  }
}
