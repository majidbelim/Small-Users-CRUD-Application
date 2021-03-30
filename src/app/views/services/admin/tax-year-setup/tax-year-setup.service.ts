import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaxYearSetupService {

  private url = `${environment.BASE_URL}tax/user/`;
  
  private header = { 
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'No-Auth': 'True' 
    }) 
  }


  constructor(private http: HttpClient) { }

  getTaxYearSetup(taxYearSetupData: { page: number; limit: number; keyword: string; }) {
    return this.http.post(this.url + "tax/years",taxYearSetupData, this.header);
  }

  createOrUpdateTaxYearSetup(taxYearSetupData: any) {
    return this.http.post(this.url + "create/tax/year", taxYearSetupData, this.header);
  }

  updateStatus(taxYearSetupData: { id: any; status: any; }) {
    return this.http.post(this.url + "tax/year/status", taxYearSetupData, this.header);
  }

  getAllTaxYearSetup() {
    return this.http.get<any>(this.url + "tax/year", this.header);
  }

  
  getAllCaseType() {
    return this.http.get<any>(this.url + "case/type", this.header);
  }

}
