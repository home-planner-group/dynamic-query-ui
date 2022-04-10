import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {catchError, Observable, of} from "rxjs";
import {QueryResponse} from "../models/QueryResponse";
import {QueryRequest} from "../models/QueryRequest";
import {OpenWarnSnackBar} from "../utility/snackbar";
import {MatSnackBar} from "@angular/material/snack-bar";

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

  private static buildErrorMessage(error: HttpErrorResponse) {
    let errorMessage: string = '';
    // exception prefix
    if (error.error.exception) {
      errorMessage += error.error.exception + ': '
    }
    // message
    if (error.error.message) {
      errorMessage += error.error.message;
    } else {
      errorMessage += 'No message found.'
    }
    // status part
    if (error.status === 0) {
      errorMessage += ' [API not available!]'
    } else {
      errorMessage += ' [' + error.statusText + ']';
    }
    return errorMessage;
  }

  private static buildErrorResponse(errorMessage: string): QueryResponse {
    return {
      instanceCount: 0,
      columnDef: [],
      rows: [],
      errorCount: 1,
      errorMessages: [
        errorMessage
      ]
    }
  }

  public dynamicQuery(queryModel: QueryRequest): Observable<QueryResponse> {
    const endpointUrl = this.controllerUrl + '/dynamic';
    return this.httpClient.post<QueryResponse>(endpointUrl, queryModel, this.defaultHeaders).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return of(QueryService.buildErrorResponse(QueryService.buildErrorMessage(error)));
      })
    );
  }

  public staticQuery(fileName: string): Observable<QueryResponse> {
    const endpointUrl = this.controllerUrl + '/static?file=' + fileName;
    return this.httpClient.post<QueryResponse>(endpointUrl, fileName, this.defaultHeaders).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return of(QueryService.buildErrorResponse(QueryService.buildErrorMessage(error)));
      })
    );
  }

  public getFiles(): Observable<string[]> {
    const endpointUrl = this.controllerUrl + '/static-files';
    return this.httpClient.get<string[]>(endpointUrl, this.defaultHeaders).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        OpenWarnSnackBar(this.snackBar, QueryService.buildErrorMessage(error));
        return of([]);
      })
    );
  }
}
