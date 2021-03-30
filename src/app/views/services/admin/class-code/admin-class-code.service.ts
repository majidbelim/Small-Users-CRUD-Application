import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminClassCodeService {
  private url = `${environment.BASE_URL}common/admin/`;
  
  private header = { 
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'No-Auth': 'True' 
    }) 
  }

  constructor(private http: HttpClient) { }

 
  getClassCodes(classCodeData: { page: number; limit: number; keyword: string; }): Observable<any> {
    return this.http.post<any>(this.url + "class/codes", classCodeData, this.header);
  }

  updateStatus(classCodeData: { id: any; status: any; }) {
    return this.http.post<any>(this.url + "class/code/status", classCodeData, this.header);
  }

  createOrUpdatClassCode(classCodeData: any) {
    return this.http.post<any>(this.url + "create/class/code", classCodeData, this.header);
  }
  
}
