import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {QueryResponse} from "../models/QueryResponse";

export class TableData {
  readonly dataSource = new MatTableDataSource<Object>();

  data: Object[][] = [];
  columnsDef: Map<number, string> = new Map<number, string>();
  displayedColumns: string[] = [];

  readonly pageSizeOptions = [5, 10, 25, 100];
  readonly defaultPageSize = 25;

  constructor() {
    this.dataSource.data = this.data;
  }

  public afterViewInit(paginator: MatPaginator | undefined, sort: MatSort | undefined) {
    if (paginator) {
      this.dataSource.paginator = paginator;
    }
    if (sort) {
      this.dataSource.sort = sort;
    }
  }

  public setData(data: QueryResponse) {
    this.columnsDef.clear();
    this.displayedColumns = [];

    for (let i = 0; i < 20; i++) {
      const value = data.columnDef[i];
      if (!value) continue;
      const cleanValue = value.toLowerCase();

      this.columnsDef.set(i, cleanValue);
      this.displayedColumns.push(cleanValue);
    }

    this.data = data.rows;
    this.dataSource.data = this.data;
  }
}
