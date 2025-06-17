import { Component } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ReactiveFormsModule, ValidationErrors, Validator, Validators } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

export type AddressData = {
  number?: string;
  street?: string;
  postalCode: string;
  city: string;
  country: string;
}

@Component({
  selector: 'lib-address',
  templateUrl: './address.html',
  styleUrl: './address.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: Address,
      multi: true
    }, {
      provide: NG_VALIDATORS,
      useExisting: Address,
      multi: true
    }
  ],
  styles: ['form {display: flex; flex-direction: column;}'],
  imports: [ReactiveFormsModule, MatInput, MatFormField, MatLabel]
})
export class Address implements ControlValueAccessor, Validator {
  protected adressForm = new FormGroup({
    number: new FormControl<string | undefined>(undefined, {nonNullable: true}),
    street: new FormControl<string | undefined>(undefined, {nonNullable: true}),
    postalCode: new FormControl<string>('', {nonNullable: true, validators: [Validators.required]}),
    city: new FormControl<string>('', {nonNullable: true, validators: [Validators.required]}),
    country: new FormControl<string>('', {nonNullable: true, validators: [Validators.required]})
  });

  private onChange = (val: AddressData) => {};
  private onTouched = () => {}; 

  ngOnInit(): void {
      this.adressForm.valueChanges.subscribe(val => {
        this.onChange(this.adressForm.getRawValue());
        this.onTouched();
      });
  }

  writeValue(obj?: AddressData): void {
    if (obj)
      this.adressForm.patchValue(obj);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled)
      this.adressForm.disable();
    else
      this.adressForm.enable();
  }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.adressForm.valid ? null : {address: true};
  }
}
