import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PtProcessTypeService {

  private url = `${environment.BASE_URL}tax/admin/`;
  
  private header = { 
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'No-Auth': 'True' 
    }) 
  }

  constructor(private http: HttpClient) { }

  getptProcessType(ptProcessTypeData: { page: number; limit: number; keyword: string; }) {
    return this.http.post(this.url + "ptProcess/types",ptProcessTypeData, this.header);
  }

  createOrUpdateptProcessType(ptProcessTypeData: any) {
    return this.http.post(this.url + "create/ptProcess/type", ptProcessTypeData, this.header);
  }

  updateStatus(ptProcessTypeData: { id: any; status: any; }) {
    return this.http.post(this.url + "ptProcess/type/status", ptProcessTypeData, this.header);
  }
}
