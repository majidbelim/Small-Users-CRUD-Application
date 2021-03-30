import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentStatusService {

  private url = `${environment.BASE_URL}tax/admin/`;
  
  private header = { 
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'No-Auth': 'True' 
    }) 
  }

  constructor(private http: HttpClient) { }

  getPaymentStatus(paymentStatusData: { page: number; limit: number; keyword: string; }) {
    return this.http.post(this.url + "payment/statuss",paymentStatusData, this.header);
  }

  createOrUpdatePaymentStatus(paymentStatusData: any) {
    return this.http.post(this.url + "create/payment/status", paymentStatusData, this.header);
  }

  updateStatus(paymentStatusData: { id: any; status: any; }) {
    return this.http.post(this.url + "payment/status", paymentStatusData, this.header);
  }
}
