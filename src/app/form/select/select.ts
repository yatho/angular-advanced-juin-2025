import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Autocomplete } from 'my-lib';

@Component({
  selector: 'app-select',
  imports: [ReactiveFormsModule, Autocomplete],
  templateUrl: './select.html',
  styleUrl: './select.css'
})
export class Select {
  protected categories = [
    'angular',
    'react',
    'vuejs',
    'svelte',
    'elm',
    'other'
  ];

  public formGroup = new FormGroup({
    category: new FormControl()
  });

  submit(): void {
    console.log(this.formGroup.value);
  }
}
