import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {QueryResponse} from "../models/QueryResponse";
import {QueryRequest} from "../models/QueryRequest";

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  private controllerUrl = environment.backendApiUrl + '/query';
  private defaultHeaders = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private httpClient: HttpClient) {
  }

  public dynamicQuery(queryModel: QueryRequest): Observable<QueryResponse> {
    const endpointUrl = this.controllerUrl + '/dynamic';
    return this.httpClient.post<QueryResponse>(endpointUrl, queryModel, this.defaultHeaders);
  }

  public staticQuery(fileName: string): Observable<QueryResponse> {
    const endpointUrl = this.controllerUrl + '/static?file=' + fileName;
    return this.httpClient.post<QueryResponse>(endpointUrl, fileName, this.defaultHeaders);
  }

  public getFiles(): Observable<string[]> {
    const endpointUrl = this.controllerUrl + '/static-files';
    return this.httpClient.get<string[]>(endpointUrl, this.defaultHeaders);
  }
}
