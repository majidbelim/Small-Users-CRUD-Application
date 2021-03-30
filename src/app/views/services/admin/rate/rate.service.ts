import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SharedService } from '../../shared.service';

@Injectable({
  providedIn: 'root'
})
export class RateService {

  private url: string;
  private role: string;
  private header = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' }) }
  constructor(private http: HttpClient, private sharedService: SharedService) {
    this.role = this.sharedService.getRole();
    if (this.role == "admin") {
      this.url = `${environment.BASE_URL}tax/admin/`;
    } else {
      this.url = `${environment.BASE_URL}tax/user/`;
    }

  }


  createOrUpdateRate(rate: any) {
    return this.http.post(this.url + "create/rate", rate, this.header);
  }

  updateStatus(rate: { id: any; status: any; }) {
    return this.http.post(this.url + "rate/status", rate, this.header);
  }
  


  getRate(cTypeData: { page: number; limit: number; keyword: string; }) {
    // return this.http.post(this.url + "rates?page=" + cTypeData.page + "&limit=" + cTypeData.limit + "&keyword=" + cTypeData.keyword, this.header);
    return this.http.post(this.url + "rates",cTypeData, this.header);
  }
}
 