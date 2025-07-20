import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResponse, ScheduledReport, ExecutionHistory, TopReport } from '../models/api.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:8001/api'; // Adjust if your backend URL is different

  constructor(private http: HttpClient) { }

  getTotalScheduledReports(): Observable<ApiResponse<ScheduledReport>> {
    return this.http.get<ApiResponse<ScheduledReport>>(`${this.baseUrl}/dashboard/total_scheduled_reports`);
  }

  getWeeklyExecutionDetails(): Observable<ApiResponse<ExecutionHistory>> {
    return this.http.get<ApiResponse<ExecutionHistory>>(`${this.baseUrl}/dashboard/weekly_execution_details`);
  }

  getTopReports(): Observable<ApiResponse<TopReport>> {
    return this.http.get<ApiResponse<TopReport>>(`${this.baseUrl}/usage/summary/top-reports`);
  }
}