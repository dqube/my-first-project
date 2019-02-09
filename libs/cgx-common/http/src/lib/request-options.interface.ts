import { HttpHeaders, HttpParams } from '@angular/common/http';

export interface RequestOptions   {
    body?: any;
    headers?: HttpHeaders | { [header: string]: string | string[] };
    observe?: 'response';
    params?: HttpParams | { [params: string]: string | string[] };
    reportProgress?: boolean;
  withCredentials?: boolean;
}

export const DEFAULT_REQUEST_OPTIONS: RequestOptions  = {};