import { Component, inject } from '@angular/core';
import { Authors } from '../services/authors';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { TplCard } from 'my-lib';

@Component({
    selector: 'app-author',
    templateUrl: './author.html',
    styleUrl: './author.css',
    imports: [AsyncPipe, NgOptimizedImage, TplCard]
})
export class Author {
  private readonly authorService = inject(Authors);
  protected author$ = inject(ActivatedRoute).data.pipe(
    map(res => res['post'].author), // post provenant du resolver
    switchMap(authorId => this.authorService.getAuthorById(authorId))
  );
}
