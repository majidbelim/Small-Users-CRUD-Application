import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeekendMethodService {

  private url = `${environment.BASE_URL}tax/admin/`;
  
  private header = { 
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'No-Auth': 'True' 
    }) 
  }

  constructor(private http: HttpClient) { }

  getWeekendMethod(weekendMethodData: { page: number; limit: number; keyword: string; }) {
    return this.http.post(this.url + "weekend/methods",weekendMethodData, this.header);
  }

  createOrUpdateWeekendMethod(weekendMethodData: any) {
    return this.http.post(this.url + "create/weekend/method", weekendMethodData, this.header);
  }

  updateStatus(weekendMethodData: { id: any; status: any; }) {
    return this.http.post(this.url + "weekend/method/status", weekendMethodData, this.header);
  }
}
