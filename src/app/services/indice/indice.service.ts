import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IndiceWrapper } from 'src/app/indice/models/indiceModel';

@Injectable({
  providedIn: 'root',
})
export class IndiceService {
  private readonly API = 'http://localhost:3000';

  constructor(private http: HttpClient) {
    //empty
  }

  getIndices() {
    return this.http.get<IndiceWrapper[]>(this.API + '/indices');
  }

  getIndiceLastUpdated() {
    return this.http.get(this.API + '/indiceLastUpdated');
  }
}
