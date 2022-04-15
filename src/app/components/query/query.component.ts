import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {QueryService} from "../../services/query.service";
import {AutoComplete} from "../../utility/autocomplete-data";
import {DynamicRequest} from "../../models/DynamicRequest";
import {QueryResponse} from "../../models/QueryResponse";
import {OpenSnackBar} from "../../utility/snackbar";
import {TableData} from "../../utility/table-data";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {StaticRequest} from "../../models/StaticRequest";

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss']
})
export class QueryComponent implements OnInit, AfterViewInit {

  fileAC = new AutoComplete();
  tableData = new TableData();

  staticRequestData = new StaticRequest();
  staticCustomDbEnabled = false;
  dynamicRequestData = new DynamicRequest();
  dynamicCustomDbEnabled = false;

  queryResponseData: QueryResponse | undefined;


  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private snackBar: MatSnackBar,
              private queryService: QueryService) {
  }

  ngOnInit(): void {
    this.queryService.getFiles().subscribe((response) => {
      this.fileAC.options = response;
    });
  }

  ngAfterViewInit(): void {
    this.tableData.afterViewInit(this.paginator, this.sort);
  }

  public chooseStaticCustomDB() {
    this.staticRequestData.customDB();
    this.staticCustomDbEnabled = true;
  }

  public chooseStaticDefaultDB() {
    this.staticRequestData.defaultDB();
    this.staticCustomDbEnabled = false;
  }

  public chooseDynamicCustomDB() {
    this.dynamicRequestData.customDB();
    this.dynamicCustomDbEnabled = true;
  }

  public chooseDynamicDefaultDB() {
    this.dynamicRequestData.defaultDB();
    this.dynamicCustomDbEnabled = false;
  }

  public submitStaticQuery(): void {
    this.staticRequestData.fileName = this.fileAC.input;
    this.queryService.staticQuery(this.staticRequestData).subscribe((response) => {
      this.receiveQueryResponse(response);
    });
  }

  public submitDynamicQuery(): void {
    this.queryService.dynamicQuery(this.dynamicRequestData).subscribe((response) => {
      this.receiveQueryResponse(response);
    });
  }

  private receiveQueryResponse(response: QueryResponse): void {
    this.queryResponseData = response;
    this.tableData.setData(response);
    OpenSnackBar(this.snackBar, 'Query was successful.');
  }
}
