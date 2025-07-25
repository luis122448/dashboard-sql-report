import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { LastExecutionHistory } from '../../models/api.model';
import { CommonModule } from '@angular/common';
import { FilterService } from '../../services/filter.service';
import { SecondsConverterPipe } from '../../pipe/seconds-converter.pipe';
import { MinutesToHoursConverterPipe } from '../../pipe/minutes-to-hours-converter.pipe';
import { MiliSecondsConverterPipe } from '../../pipe/mili-seconds-converter.pipe';
import { SubtractFiveHoursPipe } from '../../pipe/subtract-five-hours.pipe';

@Component({
  selector: 'app-execution-history-table',
  standalone: true,
  imports: [CommonModule, MinutesToHoursConverterPipe, MiliSecondsConverterPipe, SubtractFiveHoursPipe ],
  templateUrl: './execution-history-table.component.html',
  styleUrls: ['./execution-history-table.component.css'],
})
export class LastExecutionHistoryTableComponent implements OnInit {
  LastExecutionHistory: LastExecutionHistory[] = [];

  constructor(
    private apiService: ApiService,
    private filterService: FilterService
  ) {}

  ngOnInit(): void {
    this.filterService.selectedCompanyId$.subscribe((id_cia) => {
      this.apiService
        .getLastExecutionDetails(id_cia)
        .subscribe((response) => {
          this.LastExecutionHistory = response.list;
        });
    });
  }
}
