import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type Address = {
  number: string;
  street: string;
  postalCode: string;
  city: string;
  country: string;
}

export type AuthorData = {
  name: string;
  photo: string;
  pseudo: string[];
  address: Address | null;
};

@Injectable({
  providedIn: 'root'
})
export class Authors {
  private readonly http = inject(HttpClient);

  public getAuthorById(id: number): Observable<AuthorData> {
    return this.http.get<AuthorData>(`/api/authors/${id}`);
  }
}
