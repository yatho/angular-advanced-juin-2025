import { Component, inject, Input } from '@angular/core';
import { AuthorData, Authors } from '../../post/services/authors';
import { FormGroup, FormControl, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';
import { take } from 'rxjs';
import { Address, AddressData } from 'my-lib';

@Component({
  selector: 'app-author-form',
  imports: [ReactiveFormsModule, Address],
  templateUrl: './author-form.html',
  styleUrl: './author-form.css'
})
export class AuthorForm {
  private readonly authorService = inject(Authors);
  @Input({required: true})
  public id?: number;

  protected formGroup = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true
    }),
    photo: new FormControl<string>('', {
      nonNullable: true,
    }),
    pseudo: new FormArray<FormControl<string>>([]),
    address: new FormControl<AddressData | null>(null)
  });

  ngOnInit(): void {
    if (!this.id) return;

    this.authorService.getAuthorById(this.id).pipe(take(1)).subscribe(author => {
      author.pseudo.forEach(() => this.addPseudo());
      this.formGroup.patchValue(author);
    });
  }

  protected saveAuthor(): void {
    if (this.formGroup.invalid) return;

    const author: AuthorData = this.formGroup.getRawValue();
    if (this.id) {
      this.authorService.update(this.id, author).pipe(take(1)).subscribe(() => {
        console.log('MAJ ok', author);
      });
      return;
    }
    this.authorService.create(author).pipe(take(1)).subscribe(() => {
      console.log('Création ok', author);
    });
  }

  protected addPseudo(): void {
    this.formGroup.controls.pseudo.push(new FormControl<string>('', {nonNullable: true}));
  }

  protected deletePseudo(index: number): void {
    this.formGroup.controls.pseudo.removeAt(index);
  }
}
