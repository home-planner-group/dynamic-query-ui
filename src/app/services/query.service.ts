import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {catchError, Observable, of} from "rxjs";
import {QueryResponse} from "../models/QueryResponse";
import {DynamicRequest} from "../models/DynamicRequest";
import {OpenWarnSnackBar} from "../utility/snackbar";
import {MatSnackBar} from "@angular/material/snack-bar";
import {BuildErrorMessage, BuildErrorResponse} from "../utility/error-parser";
import {StaticRequest} from "../models/StaticRequest";

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  private controllerUrl = environment.backendApiUrl + '/query';
  private defaultHeaders = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private httpClient: HttpClient,
              private snackBar: MatSnackBar) {
  }

  public dynamicQuery(queryModel: DynamicRequest): Observable<QueryResponse> {
    const endpointUrl = this.controllerUrl + '/dynamic';
    return this.httpClient.post<QueryResponse>(endpointUrl, queryModel, this.defaultHeaders).pipe(
      catchError((error: HttpErrorResponse) => {
        // error handling
        console.error(error);
        // alternative response
        return of(BuildErrorResponse(error));
      })
    );
  }

  public staticQuery(queryModel: StaticRequest): Observable<QueryResponse> {
    const endpointUrl = this.controllerUrl + '/static';
    return this.httpClient.post<QueryResponse>(endpointUrl, queryModel, this.defaultHeaders).pipe(
      catchError((error: HttpErrorResponse) => {
        // error handling
        console.error(error);
        // alternative response
        return of(BuildErrorResponse(error));
      })
    );
  }

  public getFiles(): Observable<string[]> {
    const endpointUrl = this.controllerUrl + '/sql-files';
    return this.httpClient.get<string[]>(endpointUrl, this.defaultHeaders).pipe(
      catchError((error: HttpErrorResponse) => {
        // error handling
        console.error(error);
        OpenWarnSnackBar(this.snackBar, BuildErrorMessage(error));
        // alternative response
        return of([]);
      })
    );
  }
}
