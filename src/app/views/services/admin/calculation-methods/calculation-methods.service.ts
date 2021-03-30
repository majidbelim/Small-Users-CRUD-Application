import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CalculationMethodsService {

  private url = `${environment.BASE_URL}common/admin/calculation/methods/`;
  
  private header = { 
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'No-Auth': 'True' 
    }) 
  }

  constructor(private http: HttpClient) { }

  getCalculationMethods(cMethodData: { page: number; limit: number; keyword: string; }) {
    return this.http.get(this.url + "?page=" + cMethodData.page + "&limit=" + cMethodData.limit + "&keyword=" + cMethodData.keyword, this.header);
  }

  createOrUpdateCalculationMethod(cMethodData: any) {
    return this.http.post(this.url, cMethodData, this.header);
  }

  updateStatus(cMethodData: { id: any; cstatus: any; }) {
    return this.http.post(this.url + "status", cMethodData, this.header);
  }

}
