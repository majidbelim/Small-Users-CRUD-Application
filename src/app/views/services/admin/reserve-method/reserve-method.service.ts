import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReserveMethodService {
  private url = `${environment.BASE_URL}tax/admin/`;
  
  private header = { 
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'No-Auth': 'True' 
    }) 
  }

  constructor(private http: HttpClient) { }

  getReserveMethod(ReserveMethod: { page: number; limit: number; keyword: string; }) {
    return this.http.post(this.url + "reserve/methods",ReserveMethod, this.header);
  }

  createOrUpdateReserveMethod(ReserveMethod: any) {
    return this.http.post(this.url + "create/reserve/method", ReserveMethod, this.header);
  }

  updateStatus(ReserveMethod: { id: any; status: any; }) {
    return this.http.post(this.url + "reserve/method/status", ReserveMethod, this.header);
  }

}
