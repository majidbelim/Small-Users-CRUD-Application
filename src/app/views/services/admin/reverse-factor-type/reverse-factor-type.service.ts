import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SharedService } from '../../shared.service';

@Injectable({
  providedIn: 'root'
})
export class ReverseFactorTypeService {

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


  createOrUpdateReveseFactorType(reverseFactorType: any) {
    return this.http.post(this.url + "reserve/factor/type", reverseFactorType, this.header);
  }

  updateStatus(reverseFactorType: { id: any; commonStatus: any; }) {
    return this.http.put(this.url + "reserve/factor/type", reverseFactorType, this.header);
  }
  


  getReveseFactorType(cTypeData: { page: number; limit: number; keyword: string; }) {
    return this.http.get(this.url + "reserve/factor/type?page=" + cTypeData.page + "&limit=" + cTypeData.limit + "&keyword=" + cTypeData.keyword, this.header);
  }

}
