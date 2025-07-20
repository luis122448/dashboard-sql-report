export interface ApiResponse<T> {
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
    duration_ms: number;
    status: string;
}

export interface TopReport {
    id_cia: number;
    id_report: number;
    request_count: number;
    unique_ips: number;
    avg_processing_time_ms: number;
}
