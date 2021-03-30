import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ParcelTypeService {

  private url = `${environment.BASE_URL}tax/admin/`;
  
  private header = { 
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'No-Auth': 'True' 
    }) 
  }

  constructor(private http: HttpClient) { }

  getParcelType(pTypeData: { page: number; limit: number; keyword: string; }) {
    return this.http.get(this.url + "parcel/type?page=" + pTypeData.page + "&limit=" + pTypeData.limit + "&keyword=" + pTypeData.keyword, this.header);
  }

  createOrUpdateParcelType(pTypeData: any) {
    return this.http.post(this.url + "parcel/type", pTypeData, this.header);
  }

  updateStatus(pTypeData: { id: any; cstatus: any; }) {
    return this.http.put(this.url + "parcel/type", pTypeData, this.header);
  }
}
