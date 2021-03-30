import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdjustTypeService {

  private url = `${environment.BASE_URL}tax/admin/`;
  
  private header = { 
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'No-Auth': 'True' 
    }) 
  }

  constructor(private http: HttpClient) { }

  getAdjustType(adjustTypeData: { page: number; limit: number; keyword: string; }) {
    return this.http.post(this.url + "adjust/types",adjustTypeData, this.header);
  }

  createOrUpdateAdjustType(adjustTypeData: any) {
    return this.http.post(this.url + "create/adjust/type", adjustTypeData, this.header);
  }

  updateStatus(adjustTypeData: { id: any; status: any; }) {
    return this.http.post(this.url + "adjust/type/status", adjustTypeData, this.header);
  }

}
