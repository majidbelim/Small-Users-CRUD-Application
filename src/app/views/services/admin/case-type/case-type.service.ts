import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CaseTypeService {

  private url = `${environment.BASE_URL}tax/admin/`;
  
  private header = { 
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'No-Auth': 'True' 
    }) 
  }

  constructor(private http: HttpClient) { }

  getCaseType(caseTypeData: { page: number; limit: number; keyword: string; }) {
    return this.http.get(this.url + "case/type/List?page=" + caseTypeData.page + "&limit=" + caseTypeData.limit + "&key=" + caseTypeData.keyword , this.header);
  }
  createOrUpdateCaseType(caseTypeData: any) {
    return this.http.post(this.url + "case/type/create", caseTypeData, this.header);
  }

  updateStatus(caseTypeData: { id: any; commonStatus: any; }) {
    return this.http.post(this.url + "case/type/UpdateStatus", caseTypeData, this.header);
  }
}
