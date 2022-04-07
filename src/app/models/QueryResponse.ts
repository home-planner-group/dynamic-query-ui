export interface QueryResponse {
  instanceCount: number;
  columnDef: string[];
  rows: object[][];
  errorCount: number;
  errorMessages?: string[];
}
