export interface QueryResponse {
  instanceCount?: number;
  columnDef?: Map<number, string>;
  rows?: object[][];
  errorCount?: number;
  errorMessages?: string[];
}
