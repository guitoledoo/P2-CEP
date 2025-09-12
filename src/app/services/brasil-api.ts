import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrasilApi {
  private baseUrl = 'https://brasilapi.com.br/api';

  constructor(private http: HttpClient) { }

  getCep(cep: string): Observable<any> {
    const sanitized = cep.replace(/\D/g, ''); 
    return this.http.get(`${this.baseUrl}/cep/v1/${sanitized}`);
  }
}

