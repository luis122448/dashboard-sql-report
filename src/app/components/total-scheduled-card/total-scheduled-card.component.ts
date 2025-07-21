import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { CompanyStatus } from '../../models/api.model';

@Component({
  selector: 'app-total-scheduled-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './total-scheduled-card.component.html',
  styleUrls: ['./total-scheduled-card.component.css']
})
export class TotalScheduledCardComponent implements OnInit {

  totalReports: number | null = null;
  companyDetails: CompanyStatus[] | null = null;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getReportStatus().subscribe(response => {
      this.companyDetails = response.list;
      this.totalReports = this.companyDetails.reduce((sum, company) => sum + company.num_reports, 0);
    });
  }

}
