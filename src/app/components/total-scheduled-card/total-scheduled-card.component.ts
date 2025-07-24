import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { CompanyStatus } from '../../models/api.model';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-total-scheduled-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './total-scheduled-card.component.html',
  styleUrls: ['./total-scheduled-card.component.css'],
})
export class TotalScheduledCardComponent implements OnInit {
  totalReports: number | null = null;
  companyDetails: CompanyStatus[] | null = null;
  selectedCompanyId: number | null = null;

  constructor(
    private apiService: ApiService,
    private filterService: FilterService
  ) {}

  ngOnInit(): void {
    this.apiService.getReportStatus().subscribe((response) => {
      this.companyDetails = response.list;
      this.totalReports = this.companyDetails.reduce(
        (sum, company) => sum + company.num_reports,
        0
      );
      this.filterService.selectedCompanyId$.subscribe((id) => {
        this.selectedCompanyId = id;
      });
    });
  }

  onCompanySelected(company: CompanyStatus | null): void {
    const id = company ? company.id_cia : null;
    this.filterService.setSelectedCompany(id);
  }
}
