import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TypeCodeService {

  private url = `${environment.BASE_URL}tax/admin/`;
  
  private header = { 
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'No-Auth': 'True' 
    }) 
  }

  constructor(private http: HttpClient) { }

  getTypeCode(typeCodeData: { page: number; limit: number; keyword: string; }) {
    return this.http.get(this.url + "type/code/list?page=" + typeCodeData.page + "&limit=" + typeCodeData.limit + "&keyword=" + typeCodeData.keyword, this.header);
  }

  createOrUpdateTypeCode(typeCodeData: any) {
    return this.http.post(this.url + "type/code/create", typeCodeData, this.header);
  }

  updateStatus(typeCodeData: { id: any; commonStatus: any; }) {
    return this.http.post(this.url + "type/code/updateStatus", typeCodeData, this.header);
  }
}
