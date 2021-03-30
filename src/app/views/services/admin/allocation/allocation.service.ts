import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AllocationService {

  private url = `${environment.BASE_URL}tax/admin/`;
  
  private header = { 
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'No-Auth': 'True' 
    }) 
  }

  constructor(private http: HttpClient) { }

  getAllocation(allocationData: { page: number; limit: number; keyword: string; }) {
    return this.http.post(this.url + "allocations",allocationData, this.header);
  }

  createOrUpdateAllocation(allocationData: { id: any; description: any; longDescription: any; allocationMethodId:  any;  }) {
    return this.http.post(this.url + "create/allocation", allocationData, this.header);
  }

  updateStatus(allocationData: { id: any; status: any; }) {
    return this.http.post(this.url + "allocation/status", allocationData, this.header);
  }
  getAllocationMethod(){
    return this.http.get(this.url + "allocation/method", this.header);
  }
}
