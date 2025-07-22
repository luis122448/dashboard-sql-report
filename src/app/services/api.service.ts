import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ApiResponseList, ScheduledReport, ExecutionHistory, TopReport, CompanyStatus } from '../models/api.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL = environment.API_URL + '/api';

  constructor(private http: HttpClient) { }

  getTotalScheduledReports(): Observable<ApiResponseList<ScheduledReport>> {
    return this.http.get<ApiResponseList<ScheduledReport>>(`${this.API_URL}/dashboard/total_scheduled_reports`);
  }

  getWeeklyExecutionDetails(): Observable<ApiResponseList<ExecutionHistory>> {
    return this.http.get<ApiResponseList<ExecutionHistory>>(`${this.API_URL}/dashboard/weekly_execution_details`);
  }

  getTopReports(): Observable<ApiResponseList<TopReport>> {
    return this.http.get<ApiResponseList<TopReport>>(`${this.API_URL}/usage/summary/top-reports`);
  }

  getReportStatus(): Observable<ApiResponseList<CompanyStatus>> {
    return this.http.get<ApiResponseList<CompanyStatus>>(`${this.API_URL}/dashboard/status`);
  }

}
