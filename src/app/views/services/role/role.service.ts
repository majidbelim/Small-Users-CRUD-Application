import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SharedService } from '../shared.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private url = `${environment.BASE_URL}user-mgmt/user/`;
  
  private header = { 
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'No-Auth': 'True' ,
      'Authorization':'Bearer '+this.sharedService.getAccessToken()
    }) 
  }

  constructor(private http: HttpClient ,private sharedService:SharedService) { }

  getRoleList() {
    return this.http.get<any>(environment.BASE_URL + "common/authorities", this.header);
  }

  createRole(data: any) {
    return this.http.post(this.url + "auth/module/user/roles/role", data, this.header);
  }

  UpdateRole(data: any) {
    return this.http.put(this.url + "auth/module", data, this.header);
  }
  
  updateStatus(data: { id: any; commonStatus: any; }) {
    return this.http.put(this.url + "function", data, this.header);
  }

	getUserRolebyRoleId(id: any) {
		return this.http.get<any>(this.url + 'auth/module/' + id,  this.header );
	}

  userModuleFunction(){
    return this.http.get<any>(this.url + 'module/modules',  this.header ); 
  }




}

