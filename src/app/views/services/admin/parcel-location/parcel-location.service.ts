import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SharedService } from '../../shared.service';

@Injectable({
  providedIn: 'root'
})
export class ParcelLocationService {

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
      this.url = `${environment.BASE_URL}tax/user/`;
    }
  }


  getParcelType() {
    return this.http.get<any>(this.url + "common/parcel/type", this.header);
  }


  getPropertyGroups(propertyGroupData: { page: number; limit: number; keyword: string; }) {
    return this.http.get(this.url + "parcels?page=" + propertyGroupData.page + "&limit=" + propertyGroupData.limit + "&keyword=" + propertyGroupData.keyword , this.header);
  }


  createOrUpdatParcelLocation(obj: { id: any; description: any; parcelTypeId: any; assetLocationId: any; }) {
    return this.http.post(this.url + "create/parcel", obj, this.header);
  }

  

  updateStatus(propertyGroupData: { id: any; cstatus: any; }) {
    return this.http.put(this.url + "parcel/status", propertyGroupData, this.header);
  }

}
