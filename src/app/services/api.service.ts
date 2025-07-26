import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {
  ApiResponseList,
  ScheduledReport,
  LastExecutionHistory,
  TopReport,
  CompanyStatus,
  ExecutionReport,
  ApiResponseObject,
  ApiResponse,
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

  getLastExecutionDetails(
    id_cia: number | null
  ): Observable<ApiResponseList<LastExecutionHistory>> {
    let params = new HttpParams();
    if (id_cia) {
      params = params.append('id_cia', id_cia);
    }
    return this.http.get<ApiResponseList<LastExecutionHistory>>(
      `${this.BASE_URL}/dashboard/last_execution_details`,
      { params }
    );
  }

  getExecutionsByReport(id_cia: number, id_report: number): Observable<ApiResponseList<ExecutionReport>> {
    let params = new HttpParams();
    if (id_cia) {
      params = params.append('id_cia', id_cia);
      params = params.append('id_report', id_report);
    }
    return this.http.get<ApiResponseList<ExecutionReport>>(
      `${this.BASE_URL}/dashboard/executions_by_report`,
      { params }
    );
  }

  postForceRun(id_cia: number, id_report: number): Observable<ApiResponse> {
    let params = new HttpParams();
    if (id_cia) {
      params = params.append('id_cia', id_cia);
      params = params.append('id_report', id_report);
    }
    return this.http.get<ApiResponseList<ExecutionReport>>(
      `${this.BASE_URL}/dashboard/executions_by_report`,
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
