import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AllocationMethodService {

  private url = `${environment.BASE_URL}tax/admin/`;
  
  private header = { 
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'No-Auth': 'True' 
    }) 
  }

  constructor(private http: HttpClient) { }

  getAllocationMethod(allocationMethodData: { page: number; limit: number; keyword: string; }) {
    return this.http.post(this.url + "allocation/methods",allocationMethodData, this.header);
  }

  createOrUpdateAllocationMethod(allocationMethodData: any) {
    return this.http.post(this.url + "create/allocation/method", allocationMethodData, this.header);
  }

  updateStatus(allocationMethodData: { id: any; status: any; }) {
    return this.http.post(this.url + "allocation/method/status", allocationMethodData, this.header);
  }
}
