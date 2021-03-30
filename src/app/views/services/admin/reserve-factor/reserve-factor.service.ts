import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReserveFactorService {

  private url = `${environment.BASE_URL}tax/admin/`;
  
  private header = { 
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'No-Auth': 'True' 
    }) 
  }

  constructor(private http: HttpClient) { }

  getReserveFactor(reserveFactorData: { page: number; limit: number; keyword: string; }) {
    return this.http.get(this.url + "reserve/factors?page=" + reserveFactorData.page + "&limit=" + reserveFactorData.limit + "&keyword=" + reserveFactorData.keyword, this.header);
  }

  createOrUpdateReserveFactor(reserveFactorData: { id: any; description: any; longDescription: any; reserveFactorTypeId:  any;  }) {
    return this.http.post(this.url + "reserve/factors", reserveFactorData, this.header);
  }

  updateStatus(reserveFactorData: { id: any; commonStatus: any; }) {
    return this.http.put(this.url + "reserve/factors", reserveFactorData, this.header);
  }
  getReserveFactorType(){
    return this.http.get(this.url + "reserve/factor/type/list", this.header);
  }

}
