import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Address as AddressForm } from 'my-lib';

@Component({
  selector: 'app-address',
  imports: [ReactiveFormsModule, AddressForm],
  templateUrl: './address.html',
  styleUrl: './address.css'
})
export class Address {
  protected formGroup = new FormGroup({
    address: new FormControl<Address | null>(null)
  });

  submit(): void {
    console.log('val', this.formGroup.value);
    console.log('valid', this.formGroup.valid);
    console.log('errors', this.formGroup.controls.address.errors);
  }
}
