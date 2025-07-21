import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { CompanyStatus } from '../../models/api.model';
import { FilterService } from '../../services/filter.service';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

@Component({
  selector: 'app-total-scheduled-card',
  standalone: true,
  imports: [CommonModule, FormsModule], // Add FormsModule here
  templateUrl: './total-scheduled-card.component.html',
  styleUrls: ['./total-scheduled-card.component.css']
})
export class TotalScheduledCardComponent implements OnInit {

  totalReports: number | null = null;
  companyDetails: CompanyStatus[] | null = null;
  selectedCompanyId: number | null = null;

  @Output() companySelected = new EventEmitter<number | null>();

  constructor(private apiService: ApiService, private filterService: FilterService) { }

  ngOnInit(): void {
    this.apiService.getReportStatus().subscribe(response => {
      this.companyDetails = response.list; // Corrected to use 'object'
      this.totalReports = this.companyDetails.reduce((sum, company) => sum + company.num_reports, 0);
      this.selectedCompanyId = null; // Initialize with 'All Companies' selected
      this.filterService.setSelectedCompany(null); // Emit initial state
    });
  }

  onCompanyChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const id = selectElement.value === 'null' ? null : Number(selectElement.value);
    this.selectedCompanyId = id;
    this.filterService.setSelectedCompany(id);
    this.companySelected.emit(id);
  }

}
