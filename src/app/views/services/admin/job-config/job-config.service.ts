import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobConfigService {

  private url = `${environment.BASE_URL}common/admin/`;
  
  private header = { 
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'No-Auth': 'True' 
    }) 
  }
  
  constructor(private http: HttpClient) { }

  createOrUpdatUserConfig(value: any) {
    return this.http.post(this.url + 'job/config', value, this.header);
  }

  getJobConfig(obj: { page: number; limit: number; keyword: string; }) {
    return this.http.get<any>(this.url + "api/configs?page="+ obj.page +"&limit="+ obj.limit +"&keyword=" + obj.keyword);
  }

  updateStatus(configData: { id: any; cstatus: any; }) {
    return this.http.post(this.url + 'api/configs/status', configData, this.header);
  }

}
