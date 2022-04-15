import {HttpErrorResponse} from "@angular/common/http";
import {QueryResponse} from "../models/QueryResponse";

export function BuildErrorResponse(error: HttpErrorResponse): QueryResponse {
  return {
    instanceCount: 0,
    columnDef: [],
    rows: [],
    errorCount: 1,
    errorMessages: [
      BuildErrorMessage(error)
    ]
  }
}

export function BuildErrorMessage(error: HttpErrorResponse): string {
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
