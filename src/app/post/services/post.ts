import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, Signal, signal } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

export type PostData = {
  id: number;
  title: string;
  content: string;
  author: number;
  photo: string;
}

@Injectable({
  providedIn: 'root'
})
export class Post {
  private readonly http = inject(HttpClient);

  private _postList?: PostData[];

  private readonly _selectedPosts = signal<Array<PostData>>([]);
  private readonly _selectAuthors = computed(() => [...new Set(this._selectedPosts().map(post => post.author))])

  public get selectedPosts(): Signal<Array<PostData>> {
    return this._selectedPosts.asReadonly();
  }

  public get selectedAuthors(): Signal<Array<number>> {
    return this._selectAuthors;
  }

  public getPosts(): Observable<PostData[]> {
    if (this._postList) return of(this._postList);
    return this.http.get<PostData[]>('/api/posts')
      .pipe(
        tap(res => {
          this._postList = res;
        })
      );
  }

  public getPostById(id: number): Observable<PostData> {
    const post = this._postList?.find(post => post.id === id);
    if (post) return of(post);
    return this.http.get<PostData>(`/api/posts/${id}`).pipe(
      tap(res => {
        if (!this._postList) return;
        this._postList = this._postList.filter(elt => elt.id !== id);
        this._postList.push(res);
      })
    );
  }

  public selectPost(post: PostData): void {
    this._selectedPosts.update((oldPosts) => [...new Set([...oldPosts, post])]);
  }
}
