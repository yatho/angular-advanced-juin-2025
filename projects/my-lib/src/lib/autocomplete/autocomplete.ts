import { Component, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FilteredListPipe } from '../filtered-list-pipe';
import { ClickOutside } from '../click-outside';
import { BoldSearchText } from '../bold-search-text';

@Component({
  selector: 'lib-autocomplete',
  imports: [FormsModule, FilteredListPipe, ClickOutside, BoldSearchText],
  templateUrl: './autocomplete.html',
  styleUrl: './autocomplete.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: Autocomplete,
      multi: true
    }
  ]
})
export class Autocomplete implements ControlValueAccessor {
protected searchValue?: string;
  protected openned = false;

  set value(value: string) {
    this.searchValue = value;
    this.openned = false;
    this.onChange(value);
    this.onTouched();
  }

  @Input()
  options: string[] = [];
  @Input()
  placeholder: string = 'Search ...';

  private onChange = (value: string) => {};
  private onTouched = () => {};
  
  writeValue(obj?: string): void {
    if (obj)
      this.searchValue = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onOptionClick(option: string) {
    this.value = option;
  }
}
