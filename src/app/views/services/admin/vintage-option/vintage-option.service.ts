import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VintageOptionService {

  private url = `${environment.BASE_URL}tax/admin/`;
  
  private header = { 
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'No-Auth': 'True' 
    }) 
  }

  constructor(private http: HttpClient) { }

  getVintageOption(vintageOptionData: { page: number; limit: number; keyword: string; }) {
    return this.http.post(this.url + "vintage/options",vintageOptionData, this.header);
  }

  createOrUpdateVintageOption(vintageOptionData: any) {
    return this.http.post(this.url + "create/vintage/option", vintageOptionData, this.header);
  }

  updateStatus(vintageOptionData: { id: any; status: any; }) {
    return this.http.post(this.url + "vintage/option/status", vintageOptionData, this.header);
  }

}
