import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FunctionUmService {

  private url = `${environment.BASE_URL}user-mgmt/admin/`;
  
  private header = { 
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'No-Auth': 'True' 
    }) 
  }

  constructor(private http: HttpClient) { }

  getFunctionUMList(data: { page: number; limit: number; keyword: string; }) {
    return this.http.get<any>(this.url + "function?page=" + data.page + "&limit=" + data.limit + "&keyword=" + data.keyword, this.header);
  }

  createOrUpdateFunctionUM(data: any) {
    return this.http.post(this.url + "function", data, this.header);
  }

  updateStatus(data: { id: any; commonStatus: any; }) {
    return this.http.put(this.url + "function", data, this.header);
  }


  getAllModules() {
    return this.http.get<any>(this.url + "module/get/modules" , this.header);
  }
}
