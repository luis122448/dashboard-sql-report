import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ExecutionHistory } from '../../models/api.model';
import { CommonModule } from '@angular/common';
import { FilterService } from '../../services/filter.service';
import { SecondsConverterPipe } from '../../pipe/seconds-converter.pipe';
import { MinutesToHoursConverterPipe } from '../../pipe/minutes-to-hours-converter.pipe';
import { MiliSecondsConverterPipe } from '../../pipe/mili-seconds-converter.pipe';

@Component({
  selector: 'app-execution-history-table',
  standalone: true,
  imports: [CommonModule, SecondsConverterPipe, MinutesToHoursConverterPipe, MiliSecondsConverterPipe ],
  templateUrl: './execution-history-table.component.html',
  styleUrls: ['./execution-history-table.component.css'],
})
export class ExecutionHistoryTableComponent implements OnInit {
  executionHistory: ExecutionHistory[] = [];

  constructor(
    private apiService: ApiService,
    private filterService: FilterService
  ) {}

  ngOnInit(): void {
    this.filterService.selectedCompanyId$.subscribe((id_cia) => {
      this.apiService
        .getWeeklyExecutionDetails(id_cia)
        .subscribe((response) => {
          this.executionHistory = response.list;
        });
    });
  }
}
