import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public httpClient: HttpClient) { }

  getData(): Observable<any> {
    return this.httpClient.get('../../assets/angular_Response (3).json')
  }
  postItem(item): Observable<any> {
    return this.httpClient.post('../../assets/angular_Response (3).json', item)
  }
}
