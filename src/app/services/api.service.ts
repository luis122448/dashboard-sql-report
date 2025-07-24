import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {
  ApiResponseList,
  ScheduledReport,
  ExecutionHistory,
  TopReport,
  CompanyStatus,
} from '../models/api.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  BASE_URL = environment.API_URL + '/api';

  constructor(private http: HttpClient) {}

  getTotalScheduledReports(): Observable<ApiResponseList<ScheduledReport>> {
    return this.http.get<ApiResponseList<ScheduledReport>>(
      `${this.BASE_URL}/dashboard/total_scheduled_reports`
    );
  }

  getWeeklyExecutionDetails(
    id_cia: number | null
  ): Observable<ApiResponseList<ExecutionHistory>> {
    let params = new HttpParams();
    if (id_cia) {
      params = params.append('id_cia', id_cia);
    }
    return this.http.get<ApiResponseList<ExecutionHistory>>(
      `${this.BASE_URL}/dashboard/weekly_execution_details`,
      { params }
    );
  }

  getTopReports(id_cia: number | null): Observable<ApiResponseList<TopReport>> {
    let params = new HttpParams();
    if (id_cia) {
      params = params.append('id_cia', id_cia);
    }
    return this.http.get<ApiResponseList<TopReport>>(
      `${this.BASE_URL}/usage/summary/top-reports`,
      { params }
    );
  }

  getReportStatus(): Observable<ApiResponseList<CompanyStatus>> {
    return this.http.get<ApiResponseList<CompanyStatus>>(
      `${this.BASE_URL}/dashboard/status`
    );
  }
}
