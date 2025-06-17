import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AddressData } from 'my-lib';
import { Observable } from 'rxjs';

export type AuthorData = {
  name: string;
  photo: string;
  pseudo: string[];
  address: AddressData | null;
};

@Injectable({
  providedIn: 'root'
})
export class Authors {
  private readonly http = inject(HttpClient);

  public getAuthorById(id: number): Observable<AuthorData> {
    return this.http.get<AuthorData>(`/api/authors/${id}`);
  }

  public create(author: AuthorData): Observable<void> {
    return this.http.post<void>('/api/authors', author);
  }

  public update(id: number, author: AuthorData): Observable<void> {
    return this.http.put<void>(`/api/authors/${id}`, author);
  }
}
