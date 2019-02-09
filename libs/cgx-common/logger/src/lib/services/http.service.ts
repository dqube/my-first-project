import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CGXLogInterface } from '../types/cgx-log.interface';



@Injectable()
export class CGXLoggerHttpService {
  constructor(private readonly http: HttpClient) { }

  logOnServer(url: string, log: CGXLogInterface, options: object): Observable<any> {
    return this.http.post(url, log, options || {});
  }

}
