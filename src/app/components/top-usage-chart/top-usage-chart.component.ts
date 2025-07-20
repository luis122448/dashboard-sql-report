import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ChartData, ChartOptions } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-top-usage-chart',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './top-usage-chart.component.html',
  styleUrls: ['./top-usage-chart.component.css']
})
export class TopUsageChartComponent implements OnInit {

  public barChartData: ChartData<'bar'> = { labels: [], datasets: [] };
  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
  };

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getTopReports().subscribe(response => {
      const reportNames = response.list.map(report => `Report ${report.id_report}`);
      const requestCounts = response.list.map(report => report.request_count);

      this.barChartData = {
        labels: reportNames,
        datasets: [
          { data: requestCounts, label: 'Request Count' }
        ]
      };
    });
  }

}
