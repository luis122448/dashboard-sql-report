import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { CompanyStatus } from '../../models/api.model';
import { FilterService } from '../../services/filter.service';
import { Router } from '@angular/router';

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
  filteredCompanyDetails: CompanyStatus[] | null = null;
  selectedCompanyId: number | null = null;

  constructor(
    private apiService: ApiService,
    private filterService: FilterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.apiService.getReportStatus().subscribe((response) => {
      this.companyDetails = response.list;
      this.updateTotalReports();
      this.filterService.selectedCompanyId$.subscribe((id) => {
        this.selectedCompanyId = id;
        this.filterCompanies();
        this.updateTotalReports();
      });
    });
  }

  filterCompanies(): void {
    if (this.selectedCompanyId !== null && this.companyDetails) {
      this.filteredCompanyDetails = this.companyDetails.filter(
        (company) => company.id_cia === this.selectedCompanyId
      );
    } else {
      this.filteredCompanyDetails = this.companyDetails;
    }
  }

  updateTotalReports(): void {
    const detailsToSum = this.filteredCompanyDetails || [];
    this.totalReports = detailsToSum.reduce(
      (sum, company) => sum + company.num_reports,
      0
    );
  }

  onCompanySelected(company: CompanyStatus | null): void {
    const id = company ? company.id_cia : -1;
    const encodedId = btoa(id.toString());
    if (id === -1) {
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/dashboard', encodedId]);
    }
  }
}
