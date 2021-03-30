import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AllocationTypeService {

  private url = `${environment.BASE_URL}tax/admin/`;
  
  private header = { 
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'No-Auth': 'True' 
    }) 
  }

  constructor(private http: HttpClient) { }

  getAllocationType(allocationTypeData: { page: number; limit: number; keyword: string; }) {
    return this.http.post(this.url + "allocation/types",allocationTypeData, this.header);
  }

  createOrUpdateAllocationType(allocationTypeData: any) {
    return this.http.post(this.url + "create/allocation/type", allocationTypeData, this.header);
  }

  updateStatus(allocationTypeData: { id: any; status: any; }) {
    return this.http.post(this.url + "allocation/type/status", allocationTypeData, this.header);
  }
}
