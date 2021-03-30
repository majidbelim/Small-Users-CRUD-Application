import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationTypeService {

  private url = `${environment.BASE_URL}common/admin/`;
  
  private header = { 
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'No-Auth': 'True' 
    }) 
  }
  
  constructor(private http: HttpClient) { }

  createOrUpdateLocationType(locationTypeData:any){
    return this.http.post<any>(this.url + "create/location/types", locationTypeData, this.header);
  }

  getLocationTypes(locationTypeData: { page: number; limit: number; keyword: string; }) {
    return this.http.get(this.url + "location/types?page=" + locationTypeData.page + "&limit=" + locationTypeData.limit + "&keyword=" + locationTypeData.keyword , this.header);
  }

  updateStatus(locationTypeData: any) {
    return this.http.post(this.url + "location/type/status", locationTypeData, this.header);
  }

}
