import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {QueryService} from "../../services/query.service";
import {AutoComplete} from "../../utility/autocomplete-data";
import {QueryRequest} from "../../models/QueryRequest";
import {QueryResponse} from "../../models/QueryResponse";
import {OpenSnackBar} from "../../utility/snackbar";
import {TableData} from "../../utility/table-data";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss']
})
export class QueryComponent implements OnInit, AfterViewInit {

  fileAC = new AutoComplete();
  tableData = new TableData();

  queryRequestData = new QueryRequest();
  queryResponseData: QueryResponse | undefined;
  customDbEnabled = false;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private snackBar: MatSnackBar,
              private queryService: QueryService) {
  }

  ngOnInit(): void {
    this.loadFileOptions();
  }

  ngAfterViewInit(): void {
    this.tableData.afterViewInit(this.paginator, this.sort);
  }

  public chooseCustomDB() {
    this.queryRequestData.customDB();
    this.customDbEnabled = true;
  }

  public chooseDefaultDB() {
    this.queryRequestData.defaultDB();
    this.customDbEnabled = false;
  }

  public submitStaticQuery(fileName: string): void {
    this.queryService.staticQuery(fileName).subscribe((response) => {
      this.queryResponseData = response;
      this.tableData.setData(response);
      OpenSnackBar(this.snackBar, 'Query was successful.');
    });
  }

  public submitDynamicQuery(): void {
    this.queryService.dynamicQuery(this.queryRequestData).subscribe((response) => {
      this.queryResponseData = response;
      this.tableData.setData(response);
      OpenSnackBar(this.snackBar, 'Query was successful.');
    });
  }

  private loadFileOptions(): void {
    this.queryService.getFiles().subscribe((response) => {
      this.fileAC.options = response;
    });
  }
}
