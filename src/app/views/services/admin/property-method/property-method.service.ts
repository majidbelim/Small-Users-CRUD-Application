import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PropertyMethodService {

  private url = `${environment.BASE_URL}tax/admin/`;
  
  private header = { 
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'No-Auth': 'True' 
    }) 
  }

  constructor(private http: HttpClient) { }

  getPropertyMethod(propertyMethodData: { page: number; limit: number; keyword: string; }) {
    return this.http.get(this.url + "property/method?page=" + propertyMethodData.page + "&limit=" + propertyMethodData.limit + "&keyword=" + propertyMethodData.keyword, this.header);
  }

  createOrUpdatePropertyMethod(propertyMethodData: any) {
    return this.http.post(this.url + "property/method", propertyMethodData, this.header);
  }

  updateStatus(propertyMethodData: { id: any; commonStatus: any; }) {
    return this.http.put(this.url + "property/method", propertyMethodData, this.header);
  }
}
