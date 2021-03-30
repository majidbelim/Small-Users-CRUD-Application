import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SharedService } from '../shared.service';

@Injectable({
  providedIn: 'root'
})
export class SubUserService {

  private url = `${environment.BASE_URL}`;

  private header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'No-Auth': 'True',
      'Authorization':'Bearer '+this.sharedService.getAccessToken()
    })
  }

  constructor(private http: HttpClient,private sharedService:SharedService) { }


  getUserRolebyRoleId(id: any) {
		return this.http.get<any>(this.url + 'user-mgmt/subuser/auth/module/' + id,  this.header );
	}
}
