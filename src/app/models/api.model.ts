export interface ApiResponseObject<T> {
    status: number;
    message: string;
    object: T;
}

export interface ApiResponseList<T> {
    status: number;
    message: string;
    list: T[];
}

export interface ScheduledReport {
    id_cia: number;
    id_report: number;
    name: string;
    query: string;
    refreshtime: number;
    company: string;
}

export interface ExecutionHistory {
    job_id: string;
    report_id_cia: number;
    report_id_report: number;
    report_name: string;
    report_company: string;
    event_type: string;
    timestamp: string;
    message: string;
    last_execution_duration_ms: number;
    last_execution_status: string;
    last_execution_time: string
}

export interface TopReport {
    id_cia: number;
    id_report: number;
    request_count: number;
    unique_ips: number;
    avg_processing_time_ms: number;
}

export interface CompanyStatus {
    company_name: string;
    id_cia: number;
    num_reports: number;
}
