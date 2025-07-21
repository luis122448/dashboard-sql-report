import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResponseList, ScheduledReport, ExecutionHistory, TopReport, CompanyStatus } from '../models/api.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:8001/api'; // Adjust if your backend URL is different

  constructor(private http: HttpClient) { }

  getTotalScheduledReports(): Observable<ApiResponseList<ScheduledReport>> {
    return this.http.get<ApiResponseList<ScheduledReport>>(`${this.baseUrl}/dashboard/total_scheduled_reports`);
  }

  getWeeklyExecutionDetails(): Observable<ApiResponseList<ExecutionHistory>> {
    return this.http.get<ApiResponseList<ExecutionHistory>>(`${this.baseUrl}/dashboard/weekly_execution_details`);
  }

  getTopReports(): Observable<ApiResponseList<TopReport>> {
    return this.http.get<ApiResponseList<TopReport>>(`${this.baseUrl}/usage/summary/top-reports`);
  }

  getReportStatus(): Observable<ApiResponseList<CompanyStatus>> {
    return this.http.get<ApiResponseList<CompanyStatus>>(`${this.baseUrl}/dashboard/status`);
  }

}
