import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EscalatedValueTypeService {


  private url = `${environment.BASE_URL}tax/admin/`;
  
  private header = { 
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'No-Auth': 'True' 
    }) 
  }

  constructor(private http: HttpClient) { }

  getEscalatedValueType(escalatedValueType: { page: number; limit: number; keyword: string; }) {
    return this.http.post(this.url + "escalated/types",escalatedValueType, this.header);
  }

  createOrUpdateEscalatedValueType(escalatedValueType: any) {
    return this.http.post(this.url + "create/escalated/type", escalatedValueType, this.header);
  }

  updateStatus(escalatedValueType: { id: any; status: any; }) {
    return this.http.post(this.url + "escalated/type/status", escalatedValueType, this.header);
  }
}
