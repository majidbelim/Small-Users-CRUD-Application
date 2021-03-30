import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EqFactorTypeService {


  private url = `${environment.BASE_URL}tax/admin/`;
  
  private header = { 
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'No-Auth': 'True' 
    }) 
  }

  constructor(private http: HttpClient) { }

  getEQFactorType(eqFactorType: { page: number; limit: number; keyword: string; }) {
    return this.http.post(this.url + "eqfactor/types",eqFactorType, this.header);
  }

  createOrUpdateEQFactorType(eqFactorType: any) {
    return this.http.post(this.url + "create/eqfactor/type", eqFactorType, this.header);
  }

  updateStatus(eqFactorType: { id: any; status: any; }) {
    return this.http.post(this.url + "eqfactor/type/status", eqFactorType, this.header);
  }
}
