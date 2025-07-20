import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ExecutionHistory } from '../../models/api.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-execution-history-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './execution-history-table.component.html',
  styleUrls: ['./execution-history-table.component.css']
})
export class ExecutionHistoryTableComponent implements OnInit {

  executionHistory: ExecutionHistory[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getWeeklyExecutionDetails().subscribe(response => {
      this.executionHistory = response.list;
    });
  }

}