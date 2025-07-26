import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { LastExecutionHistory } from '../../models/api.model';
import { CommonModule } from '@angular/common';
import { FilterService } from '../../services/filter.service';
import { SecondsConverterPipe } from '../../pipe/seconds-converter.pipe';
import { MinutesToHoursConverterPipe } from '../../pipe/minutes-to-hours-converter.pipe';
import { MiliSecondsConverterPipe } from '../../pipe/mili-seconds-converter.pipe';
import { SubtractFiveHoursPipe } from '../../pipe/subtract-five-hours.pipe';
import { Dialog } from '@angular/cdk/dialog';
import { ExecutionHistoryModalComponent } from '../execution-history-modal/execution-history-modal.component';
import { UrlModalComponent } from '../url-modal/url-modal.component';
import { environment } from '../../../environments/environment';

export interface DialogData {
  id_cia: number;
  id_report: number;
}

@Component({
  selector: 'app-execution-history-table',
  standalone: true,
  imports: [CommonModule, MinutesToHoursConverterPipe, MiliSecondsConverterPipe, SubtractFiveHoursPipe ],
  templateUrl: './execution-history-table.component.html',
  styleUrls: ['./execution-history-table.component.css'],
})
export class LastExecutionHistoryTableComponent implements OnInit {
  LastExecutionHistory: LastExecutionHistory[] = [];

  private id_cia: number | null = null;

  constructor(
    private apiService: ApiService,
    private filterService: FilterService,
    private dialog: Dialog
  ) {}

  ngOnInit(): void {
    this.filterService.selectedCompanyId$.subscribe((id_cia) => {
      this.id_cia = id_cia;
      this.apiService
        .getLastExecutionDetails(id_cia)
        .subscribe((response) => {
          this.LastExecutionHistory = response.list;
        });
    });
  }

  onRowClick(execution: LastExecutionHistory) {
    this.dialog.open<String>(ExecutionHistoryModalComponent, {
      width: '750px',
      data: {id_cia: execution.id_cia, id_report: execution.id_report}
    })
  }

  showApiUrl(execution: LastExecutionHistory) {
    const apiUrl = `${environment.API_URL}/api/reports/last/${execution.id_report}`;
    this.dialog.open(UrlModalComponent, {
      width: '900px',
      data: { apiUrl }
    });
  }

  forceRun(execution: LastExecutionHistory) {
    this.apiService.postForceRun(execution.id_cia, execution.id_report).subscribe();
  }
}
