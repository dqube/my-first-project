import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) { }

  get(url: string, params?: any): Observable<Response> {
      let options = { };
      this.setHeaders(options);
      
      return this.http.get(url, options)
          .pipe(
              // retry(3), // retry a failed request up to 3 times
              map((res: Response) => {
                  return res;
              }),
              catchError(this.handleError)
          );
  }

  postWithId(url: string, data: any, params?: any): Observable<Response> {
      return this.doPost(url, data, true, params);
  }

  post(url: string, data: any, params?: any): Observable<Response> {
      return this.doPost(url, data, false, params);
  }

  putWithId(url: string, data: any, params?: any): Observable<Response> {
      return this.doPut(url, data, true, params);
  }

  private doPost(url: string, data: any, needId: boolean, params?: any): Observable<Response> {
      let options = { };
      this.setHeaders(options);

      return this.http.post(url, data, options)
          .pipe(
              map((res: Response) => {
                  return res;
              }),
              catchError(this.handleError)
          );
  }
  
  delete(url: string, params?: any) {
      let options = { };
      this.setHeaders(options);

      console.log('data.service deleting');

      this.http.delete(url, options)
          .subscribe((res) => {console.log('deleted');
      });
  }

  private handleError(error: any) {
      if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('Client side network error occurred:', error.error.message);
      } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error('Backend - ' +
              `status: ${error.status}, ` +
              `statusText: ${error.statusText}, ` +
              `message: ${error.error.message}`);
      }

      // return an observable with a user-facing error message
      return throwError(error || 'server error');
  }

  private doPut(url: string, data: any, needId: boolean, params?: any): Observable<Response> {
      let options = { };
      this.setHeaders(options);
     
      return this.http.put(url, data, options)
          .pipe(
              map((res: Response) => {
                  return res;
              }),
              catchError(this.handleError)
          );
  }

  private setHeaders(options: any){
      // if (needId && this.securityService) {            
      //     options["headers"] = new HttpHeaders()
      //         .append('authorization', 'Bearer ' + this.securityService.GetToken())
      //         .append('x-requestid', Guid.newGuid());
      // }
      // else if (this.securityService) {            
      //     options["headers"] = new HttpHeaders()
      //         .append('authorization', 'Bearer ' + this.securityService.GetToken());
      // }
  }
 
  get headers(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    };

    return new HttpHeaders(headersConfig);
  }

  // private _request(method: HttpRequestMethod, url: string, body?: string, options?: RequestOptionsArgs): Observable<Response> {
  //   let requestOptions = new RequestOptions(Object.assign({
  //     method: method,
  //     url: url,
  //     body: body
  //   }, options));

  //   if (!requestOptions.headers) {
  //     requestOptions.headers = new Headers();
  //   }

  //   requestOptions.headers.set("Authorization", this._buildAuthHeader())

  //   return Observable.create((observer) => {
  //     this.process.next(Action.QueryStart);
  //     this._http.request(new Request(requestOptions))
  //       .map(res=> res.json())
  //       .finally(() => {
  //       this.process.next(Action.QueryStop);
  //     })
  //       .subscribe(
  //       (res) => {
  //         observer.next(res);
  //         observer.complete();
  //       },
  //       (err) => {
  //         switch (err.status) {
  //           case 401:
  //             //intercept 401
  //             this.authFailed.next(err);
  //             observer.error(err);
  //             break;
  //           default:
  //             observer.error(err);
  //             break;
  //         }
  //       })
  //   })
  // }
}