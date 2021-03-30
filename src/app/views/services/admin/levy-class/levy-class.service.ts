import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SharedService } from '../../shared.service';

@Injectable({
  providedIn: 'root'
})
export class LevyClassService {

  private url: string;
  private header = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' }) }
  constructor(private http: HttpClient) {
    this.url = `${environment.BASE_URL}tax/admin/`;
  }


  createOrUpdateLevyClass(levyClass: any) {
    return this.http.post(this.url + "create/levy/class", levyClass, this.header);
  }

  updateStatus(levyClass: { id: any; status: any; }) {
    return this.http.post(this.url + "levy/class/status", levyClass, this.header);
  }
  
  getLevyClass(levyClass: { page: number; limit: number; keyword: string; }) {
    return this.http.post(this.url + "levy/classs",levyClass, this.header);
  }
}
