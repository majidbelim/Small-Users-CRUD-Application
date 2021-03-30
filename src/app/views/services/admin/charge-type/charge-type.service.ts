import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChargeTypeService {

  private url = `${environment.BASE_URL}common/admin/`;
  
  private header = { 
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'No-Auth': 'True' 
    }) 
  }

  constructor(private http: HttpClient) { }

  getChargeTypes(cTypeData: { page: number; limit: number; keyword: string; }) {
    return this.http.get(this.url + "charge/types?page=" + cTypeData.page + "&limit=" + cTypeData.limit + "&keyword=" + cTypeData.keyword, this.header);
  }

  createOrUpdateChargeTypes(cTypeData: any) {
    return this.http.post(this.url + "charge/type", cTypeData, this.header);
  }

  updateStatus(cTypeData: { id: any; status: any; }) {
    return this.http.put(this.url + "charge/type", cTypeData, this.header);
  }

}
