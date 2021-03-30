import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SharedService } from '../../shared.service';

@Injectable({
  providedIn: 'root'
})
export class PropertyGroupService {

  // private url = `${environment.BASE_URL}common/admin/`;
  private url: string;
  private role: string;
  
  private header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'No-Auth': 'True'
    })
  }

  constructor(private http: HttpClient, private sharedService: SharedService) {
    this.role = this.sharedService.getRole();
    if (this.role == "admin") {
      console.log("ROLE : ADMIN");
      this.url = `${environment.BASE_URL}common/admin/`;
    } else {
      console.log("ROLE : USER");
      this.url = `${environment.BASE_URL}common/user/`;
    }
  }

  getPropertyGroups(propertyGroupData: { page: number; limit: number; keyword: string; }) {
    return this.http.get(this.url + "property/groups?page=" + propertyGroupData.page + "&limit=" + propertyGroupData.limit + "&keyword=" + propertyGroupData.keyword , this.header);
  }

  updateStatus(propertyGroupData: { id: any; status: any; }) {
    return this.http.post(this.url + "property/groups/status", propertyGroupData, this.header);
  }

  createOrUpdatePropertyGroup(obj: { id: any; description: any; longDescription: any; functionalClass: { id: any; }; }) {
    return this.http.post(this.url + "property/group", obj, this.header);
  }

}
