import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITechnologyRead } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<ITechnologyRead[]> {
    return this.http.get<ITechnologyRead[]>(`/technologies`);
  }
}
