import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PropertyTaxTypeService {

  private url = `${environment.BASE_URL}tax/user/`;
  private commonUrl = `${environment.BASE_URL}tax/user/common/`;
  private header = { 
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'No-Auth': 'True' 
    }) 
  }

  constructor(private http: HttpClient) { }
    
  getAllCaseType() {
    return this.http.get<any>(this.commonUrl+ "case/type", this.header);
  }

  getAllMethods() {
    return this.http.get<any>(this.commonUrl+ "tax/method", this.header);
  }

  getAllParcels() {
    return this.http.get<any>(this.url+ "parcel", this.header);
  }

  getAllSetOfBooks() {
    return this.http.get<any>(this.commonUrl+ "case/type", this.header);
  }

  getAllReserveMethods() {
    return this.http.get<any>(this.commonUrl+ "reserve/method", this.header);
  }

  getAllReserveFactors() {
    return this.http.get<any>(this.commonUrl+ "reserve/factor", this.header);
  }

  getAllUnitCosts() {
    return this.http.get<any>(this.commonUrl+ "unit/cost/type", this.header);
  }

  getAllVintageOptions() {
    return this.http.get<any>(this.commonUrl+ "vintage/option", this.header);
  }

  getAllEscalatedValues() {
    return this.http.get<any>(this.commonUrl+ "escalated/value", this.header);
  }

  getAllParcelTypes() {
    return this.http.get<any>(this.commonUrl+ "parcel/type", this.header);
  }

  getAllStates() {
    return this.http.get<any>(this.url+ "case/type", this.header);
  }

  getAllLevyClasses() {
    return this.http.get<any>(this.commonUrl+ "levy/class", this.header);
  }


  getAllAllocationTypes() {
    return this.http.get<any>(this.commonUrl+ "allocation/type", this.header);
  }



  createOrUpdateTaxType(taxType: any) {
    return this.http.post(this.url + "create/tax/type", taxType, this.header);
  }

  updateStatus(taxType: { id: any; status: any; }) {
    return this.http.post(this.url + "tax/type/status", taxType, this.header);
  }
  
  getLevyClass(taxType: { page: number; limit: number; keyword: string; }) {
    return this.http.post(this.url + "levy/classs",taxType, this.header);
  }

  getPropertyTaxType(taxType: { page: number; limit: number; keyword: string; }) {
    return this.http.get(this.url + "tax/types?page=" + taxType.page + "&limit=" + taxType.limit + "&keyword=" + taxType.keyword , this.header);
  }

}

// allocation/type