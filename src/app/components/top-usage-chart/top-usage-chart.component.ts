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

  private generateColors(requestCounts: number[]): string[] {
    const colors: string[] = [];
    const maxCount = Math.max(...requestCounts);
    const minLightness = 30; // Minimum lightness for less intense color
    const maxLightness = 70; // Maximum lightness for most intense color

    requestCounts.forEach(count => {
      const intensity = (count / maxCount); // Normalize count to 0-1
      const lightness = maxLightness - (intensity * (maxLightness - minLightness));
      colors.push(`hsl(200, 70%, ${lightness}%)`); // Using a fixed hue (e.g., 200 for blue) and varying lightness
    });
    return colors;
  }

  ngOnInit(): void {
    this.apiService.getTopReports().subscribe(response => {
      const reportNames = response.list.map(report => `Report ${report.id_report}`);
      const requestCounts = response.list.map(report => report.request_count);
      const backgroundColors = this.generateColors(requestCounts);

      this.barChartData = {
        labels: reportNames,
        datasets: [
          { data: requestCounts, label: 'Request Count', backgroundColor: backgroundColors }
        ]
      };
    });
  }

}
