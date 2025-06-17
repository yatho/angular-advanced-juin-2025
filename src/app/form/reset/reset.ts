import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Reset as ResetForm } from 'my-lib';

@Component({
  selector: 'app-reset',
  imports: [ReactiveFormsModule, ResetForm],
  templateUrl: './reset.html',
  styleUrl: './reset.css'
})
export class Reset {
  protected formGroup = new FormGroup({
    formControl: new FormControl<string | null>(null)
  });

  submit(): void {
    console.log(this.formGroup.value);
  }
}
