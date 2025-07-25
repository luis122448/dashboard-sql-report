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

export interface LastExecutionHistory {
    job_id: string;
    id_cia: number;
    id_report: number;
    name: string;
    company: string;
    event_type: string;
    refresh_time: number;
    schedule_type: string;
    schedule_date: string;
    last_execution_duration_ms: number;
    last_execution_status: string;
    last_execution_time: string;
}

export interface ExecutionReport {
    id_cia: number;
    id_report: number;
    name: string;
    cadsql: string;
    object_name: string;
    last_exec: string;
    processing_time_ms: number;
    satus: string;
    error_message: string;
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
