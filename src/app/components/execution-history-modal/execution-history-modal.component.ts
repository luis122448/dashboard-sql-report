import { Component, inject, OnInit } from '@angular/core';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { ApiService } from '../../services/api.service';
import { ExecutionReport } from '../../models/api.model';
import { CommonModule } from '@angular/common';
import { MiliSecondsConverterPipe } from '../../pipe/mili-seconds-converter.pipe';

@Component({
  selector: 'app-execution-history-modal',
  standalone: true,
  imports: [CommonModule, MiliSecondsConverterPipe],
  templateUrl: './execution-history-modal.component.html',
  styleUrls: ['./execution-history-modal.component.css']
})
export class ExecutionHistoryModalComponent implements OnInit{
  executions: ExecutionReport[] = [];
  data = inject(DIALOG_DATA);

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.getExecutionsByReport(this.data.id_cia, this.data.id_report).subscribe(response => {
      this.executions = response.list;
    });
  }
}
