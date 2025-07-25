import { Component, inject, OnInit } from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
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
  allExecutions: ExecutionReport[] = [];
  paginatedExecutions: ExecutionReport[] = [];
  currentPage = 1;
  pageSize = 20;
  data = inject(DIALOG_DATA);

  constructor(
    private apiService: ApiService,
    public dialogRef: DialogRef<string>,
  ) { }

  ngOnInit(): void {
    this.apiService.getExecutionsByReport(this.data.id_cia, this.data.id_report).subscribe(response => {
      this.allExecutions = response.list;
      this.updatePaginatedExecutions();
    });
  }

  updatePaginatedExecutions(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedExecutions = this.allExecutions.slice(startIndex, endIndex);
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedExecutions();
    }
  }

  nextPage(): void {
    if ((this.currentPage * this.pageSize) < this.allExecutions.length) {
      this.currentPage++;
      this.updatePaginatedExecutions();
    }
  }

  get totalPages(): number {
    return Math.ceil(this.allExecutions.length / this.pageSize);
  }

  close(): void {
    this.dialogRef.close();
  }
}
