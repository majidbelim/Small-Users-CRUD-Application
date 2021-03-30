import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class InstallmentTypeService {

  private url = `${environment.BASE_URL}tax/admin/`;
  
  private header = { 
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'No-Auth': 'True' 
    }) 
  }

  constructor(private http: HttpClient) { }

  getInstallmentType(InstallmentTypeData: { page: number; limit: number; keyword: string; }) {
    return this.http.get(this.url + "installment/type?page=" + InstallmentTypeData.page + "&limit=" + InstallmentTypeData.limit + "&keyword=" + InstallmentTypeData.keyword, this.header);
  }

  createOrUpdateInstallmentType(InstallmentTypeData: any) {
    return this.http.post(this.url + "installment/type", InstallmentTypeData, this.header);
  }

  updateStatus(InstallmentTypeData: { id: any; commonStatus: any; }) {
    return this.http.put(this.url + "installment/type", InstallmentTypeData, this.header);
  }
}
