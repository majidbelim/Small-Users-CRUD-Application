import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChargesService {

  private url = `${environment.BASE_URL}`;

  private header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'No-Auth': 'True'
    })
  }

  constructor(private http: HttpClient) { }


  getCharges(chargesData: { page: number; limit: number; keyword: string;status: string; }) {
    return this.http.get(this.url + "gl/subuser/cwip/charges?page=" + chargesData.page + "&limit=" + chargesData.limit + "&keyword=" + chargesData.keyword+ "&status=" + chargesData.status, this.header)
  }

}
