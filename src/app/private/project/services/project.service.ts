import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProjectCreate, IProjectRead } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<IProjectRead[]> {
    return this.http.get<IProjectRead[]>('/projects');
  }

  public createOne(body: IProjectCreate): Observable<IProjectRead> {
    return this.http.post<IProjectRead>('/projects', body);
  }
}
