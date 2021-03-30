import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdjustService {

  private url = `${environment.BASE_URL}tax/admin/`;
  
  private header = { 
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'No-Auth': 'True' 
    }) 
  }

  constructor(private http: HttpClient) { }

  getAdjust(adjustData: { page: number; limit: number; keyword: string; }) {
    return this.http.post(this.url + "adjusts",adjustData, this.header);
  }

  createOrUpdateAdjust(adjustData: { id: any; description: any; longDescription: any; adjustTypeId:  any;  }) {
    return this.http.post(this.url + "create/adjust", adjustData, this.header);
  }

  updateStatus(adjustData: { id: any; status: any; }) {
    return this.http.post(this.url + "adjust/status", adjustData, this.header);
  }
  getAdjustType(){
    return this.http.get(this.url + "adjust/type", this.header);
  }

}
