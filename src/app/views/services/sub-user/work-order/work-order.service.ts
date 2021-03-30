import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WorkOrderService {

  private url = `${environment.BASE_URL}`;

  private header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'No-Auth': 'True'
    })
  }

  constructor(private http: HttpClient) { }


  getApprovedWorkOrders(woData: { page: number; limit: number; keyword: string;}) {
    return this.http.get(this.url + "common/subuser/work/order/approval?page=" + woData.page + "&limit=" + woData.limit + "&keyword=" + woData.keyword, this.header)
  }

  getOpenWorkOrders(woData: { page: number; limit: number; keyword: string;status: string; }) {
    return this.http.get(this.url + "common/subuser/work/order/approval?page=" + woData.page + "&limit=" + woData.limit + "&keyword=" + woData.keyword, this.header)
  }

}
