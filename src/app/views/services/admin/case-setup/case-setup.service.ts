import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CaseSetupService {
  private url = `${environment.BASE_URL}tax/user/`;
  
  private header = { 
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'No-Auth': 'True' 
    }) 
  }


  constructor(private http: HttpClient) { }

  getCaseSetup(caseSetup: { page: number; limit: number; keyword: string; }) {
    return this.http.post(this.url + "cases",caseSetup, this.header);
  }

  createOrUpdateCaseSetup(caseSetup: any) {
    return this.http.post(this.url + "create/case", caseSetup, this.header);
  }

  updateStatus(caseSetup: { id: any; status: any; }) {
    return this.http.post(this.url + "case/status", caseSetup, this.header);
  }
}