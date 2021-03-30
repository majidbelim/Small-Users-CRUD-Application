import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SharedService } from '../shared.service';

@Injectable({
  providedIn: 'root'
})
export class RateTypeService {
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


  createOrUpdateRateType(rateType: any) {
    return this.http.post(this.url + "create/rate/type", rateType, this.header);
  }

  updateStatus(rateType: { id: any; status: any; }) {
    return this.http.post(this.url + "rate/type/status", rateType, this.header);
  }
  


  getRateType(cTypeData: { page: number; limit: number; keyword: string; }) {
    // return this.http.post(this.url + "rate/types?page=" + cTypeData.page + "&limit=" + cTypeData.limit + "&keyword=" + cTypeData.keyword, this.header);
    return this.http.post(this.url + "rate/types",cTypeData, this.header);

  }

  getRateTypeList() {
    return this.http.get(this.url + "rate/type" , this.header);
  }
 
}
