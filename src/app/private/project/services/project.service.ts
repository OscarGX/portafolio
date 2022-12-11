import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProjectCreate, IProjectRead } from '../interface';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private collection: AngularFirestoreCollection<IProjectRead>;

  constructor(private http: HttpClient, private firestore: AngularFirestore) {
    this.collection = this.firestore.collection('projects');
  }

  public getAll(): Observable<IProjectRead[]> {
    return this.http.get<IProjectRead[]>('/projects');
  }

  public createOne(body: IProjectCreate): Observable<IProjectRead> {
    return this.http.post<IProjectRead>('/projects', body);
  }

  public getAllFirebase() {
    return this.collection.valueChanges();
  }
}
