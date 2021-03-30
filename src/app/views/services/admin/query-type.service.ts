import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QueryTypeService {

  private url = `${environment.BASE_URL}tax/admin/`;
  
  private header = { 
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'No-Auth': 'True' 
    }) 
  }

  constructor(private http: HttpClient) { }

  getQueryType(QueryTypeData: { page: number; limit: number; keyword: string; }) {
    return this.http.post(this.url + "query/types",QueryTypeData, this.header);
  }

  createOrUpdateQueryType(QueryTypeData: any) {
    return this.http.post(this.url + "create/query/type", QueryTypeData, this.header);
  }

  updateStatus(QueryTypeData: { id: any; status: any; }) {
    return this.http.post(this.url + "query/type/status", QueryTypeData, this.header);
  }
}
