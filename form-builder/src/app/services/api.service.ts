import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEventType } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient, 
              private errorService: ErrorService) {
  }

  /**
   * Generic Method, GET method.
   * Retrieve all items from the server.
   * @param {boolean} deleted - True for deleted, False if not or no needed.
   * @param {string[]} fields - Id, Name, UId.
   * @param {boolean} connected - Optional. True if getting html templates that are connected to forms
   * @returns {Observable<ApiResult>} - The teams.
   * @memberof ApiService
   */
  public getItems<T>(url: string, deleted: boolean = true, fields: string[] = [], connected?: boolean): Observable<T> {
    let realUrl = deleted ? url + '?deleted=1' : url;
    realUrl += fields.length > 0 ? `${deleted ? '&' : '?'}fields=${fields.join(",")}` : '';

    if (connected) {
      realUrl += deleted ? '&connected=1' : '?connected=1';
    }

    return this.httpClient.get<ApiResult>(realUrl).pipe(
      map((data: ApiResult) => {
        if (data.Result.length > 0 || typeof data.Result === 'object') {
          return data.Result;
        } else if (data.Errors.length > 0) {
          const message: string = data.Errors.join(", ");
          const errorObject = { reason: message, status: 'Bad Request' };

          this.errorService.openDialog(errorObject);
        }
      })
    );
  }

}
