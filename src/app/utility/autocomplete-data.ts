import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";

export class AutoComplete {
  input: string = '';
  options: string[] = [];
  readonly inputControl = new FormControl();
  readonly filteredOptions: Observable<string[]> = this.inputControl.valueChanges.pipe(
    startWith(''),
    map(value => this.options.filter(option => option.toLowerCase().includes(value.toLowerCase()))),
  );

  public reset(): void {
    this.input = '';
    this.options = [];
  }
}
