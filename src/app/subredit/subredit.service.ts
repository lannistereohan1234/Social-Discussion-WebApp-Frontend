import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubreditModel } from './subredit-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubreditService {
  constructor(private http: HttpClient) { }

  getAllSubredits(): Observable<Array<SubreditModel>> {
    return this.http.get<Array<SubreditModel>>('http://localhost:8081/api/subredit');
  }

  createSubredit(subreditModel: SubreditModel): Observable<SubreditModel> {
    return this.http.post<SubreditModel>('http://localhost:8081/api/subredit',
      subreditModel);
  }
}
