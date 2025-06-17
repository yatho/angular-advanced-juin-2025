import { Component, inject } from '@angular/core';
import { Authors } from '../services/authors';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { NgIf, AsyncPipe } from '@angular/common';
import { MatCard } from '@angular/material/card';

@Component({
    selector: 'app-author',
    templateUrl: './author.html',
    styleUrl: './author.css',
    imports: [NgIf, MatCard, AsyncPipe]
})
export class Author {
  private readonly authorService = inject(Authors);
  protected author$ = inject(ActivatedRoute).data.pipe(
    map(res => res['post'].author), // post provenant du resolver
    switchMap(authorId => this.authorService.getAuthorById(authorId))
  );
}
