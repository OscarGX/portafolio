import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProjectCreate, IProjectRead } from '../interface';
import { collection, collectionData, CollectionReference, DocumentData, Firestore } from '@angular/fire/firestore';
import { getDownloadURL, ref, Storage, StorageReference } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private collection: CollectionReference<DocumentData>;
  /* private storageRef: StorageReference; */

  constructor(private http: HttpClient, private firestore: Firestore, private storage: Storage) {
    this.collection = collection(this.firestore, 'projects');
  }

  public getAll(): Observable<IProjectRead[]> {
    return this.http.get<IProjectRead[]>('/projects');
  }

  public createOne(body: IProjectCreate): Observable<IProjectRead> {
    return this.http.post<IProjectRead>('/projects', body);
  }

  public getAllFirebase() {
    return collectionData(this.collection) as Observable<IProjectRead[]>;
  }

 /*  public getFirebaseFiles() {
    console.log(this.storageRef);
    return;
    return getDownloadURL(this.storageRef);
  } */
}
