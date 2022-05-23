import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITagRead } from './interface';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<ITagRead[]> {
    return this.http.get<ITagRead[]>(`/tags`);
  }
}
