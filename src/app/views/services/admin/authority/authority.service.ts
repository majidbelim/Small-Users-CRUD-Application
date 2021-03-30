import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorityService {

  private url = `${environment.BASE_URL}user-mgmt/admin/`;
  
  private header = { 
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'No-Auth': 'True' 
    }) 
  }

  constructor(private http: HttpClient) { }

  getAuthorityList(data: { page: number; limit: number; keyword: string; }) {
    return this.http.get<any>(this.url + "user/authorities?page=" + data.page + "&limit=" + data.limit + "&keyword=" + data.keyword, this.header);
  }

  createOrUpdateAuthority(data: any) {
    return this.http.post(this.url + "user/authorities", data, this.header);
  }

  updateStatus(data: { id: any; status: any; }) {
    return this.http.put(this.url + "user/authorities", data, this.header);
  }
}
