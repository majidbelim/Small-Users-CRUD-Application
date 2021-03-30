import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PtProcessStatusService {

  private url = `${environment.BASE_URL}tax/admin/`;
  
  private header = { 
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'No-Auth': 'True' 
    }) 
  }

  constructor(private http: HttpClient) { }

  getPTProcessStatus(ptProcessStatu: { page: number; limit: number; keyword: string; }) {
    return this.http.post(this.url + "ptProcess/statuss",ptProcessStatu, this.header);
  }

  createOrUpdatePTProcessStatus(ptProcessStatu: any) {
    return this.http.post(this.url + "create/ptProcess/status", ptProcessStatu, this.header);
  }

  updateStatus(ptProcessStatu: { id: any; status: any; }) {
    return this.http.post(this.url + "ptProcess/status", ptProcessStatu, this.header);
  }
}
