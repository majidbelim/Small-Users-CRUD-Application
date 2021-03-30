import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonAPIService {

  private url = `${environment.BASE_URL}common/`;

  private header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json', 'No-Auth': 'True'
    })
  }

  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get<any>(this.url + "countries", this.header);
  }

  getStateByCountryId(countryId: any) {
    return this.http.get<any>(this.url + "states/" + countryId, this.header);
  }

  getCityByStateId(stateId: any) {
    return this.http.get<any>(this.url + "cities/" + stateId, this.header);
  }

  getAllCompanies() {
    return this.http.get<any>(this.url + "user/company/all/companies", this.header);
  }

  getUsers() {
    return this.http.get<any>(this.url + "users", this.header);
  }

  getBusinessSegments() {
    return this.http.get<any>(this.url + "business/segments", this.header);
  }

  getCompaniesByUser(userId: any) {
    return this.http.get<any>(this.url + "users/" + userId + "/companies", this.header);
  }

  getCompanies() {
    return this.http.get<any>(this.url + "all/companies", this.header);
  }

  getFunctionalClasses() {
    return this.http.get<any>(this.url + "functional/classes", this.header);
  }

  getClosingOptions() {
    return this.http.get<any>(this.url + "closing/options", this.header);
  }

  getRWIPType() {
    return this.http.get<any>(this.url + "rwip/types", this.header);
  }

  getDepartments() {
    return this.http.get<any>(this.url + "departments", this.header);
  }

  getWorkOrderRevisions() {
    return this.http.get<any>(this.url + "work/order/revisions", this.header);
  }

  getApprovalTypes(value: any) {
    return this.http.get<any>(this.url + "approval/type?aType=" + value, this.header);
  }
  
  getSetOfBooks() {
    return this.http.get<any>(this.url + "set/of/book", this.header);
  }

  getFundingProjectTypes() {
    return this.http.get<any>(this.url + "funding/types", this.header);
  }

  getPropertyGroups() {
    return this.http.get<any>(this.url + "property/group", this.header);
  }

  getPropertyUnits() {
    return this.http.get<any>(this.url + "property/unit", this.header);
  }

  getProjCwipCharges(woId: any) {
    return this.http.get<any>(this.url + "proj/cwip/charge?workOrderId="+ woId, this.header);
  }

  getChargeTypes() {
    return this.http.get<any>(this.url + "charge/types", this.header);
  }

  getCalculationMethodTypes(type: any) {
    return this.http.put<any>(this.url + "calculation/methods?type=" + type, this.header);
  }

  getAssetHistoryList(assetData: { page: number; limit: number; keyword: string; }) {
    return this.http.get<any>(this.url + "user/asset/history?page="+ assetData.page +"&limit="+ assetData.limit +"&keyword=" + assetData.keyword, this.header);
  }

  getAssets(assetData: { page: number; limit: number; keyword: string; }) {
    return this.http.get<any>(this.url + "user/assets?page="+ assetData.page +"&limit="+ assetData.limit +"&keyword=" + assetData.keyword, this.header);
  }

  getAssetRetirement(assetData: { page: number; limit: number; keyword: string; }) {
    return this.http.get<any>(this.url + "user/asset/retirement?page="+ assetData.page +"&limit="+ assetData.limit +"&keyword=" + assetData.keyword, this.header);
  }

  getAssetsalvage(assetData: { page: number; limit: number; keyword: string; }) {
    return this.http.get<any>(this.url + "user/asset/slavage?page="+ assetData.page +"&limit="+ assetData.limit +"&keyword=" + assetData.keyword, this.header);
  }

  getAssetDetails(assetData: { page: number; limit: number; keyword: string; }) {
    return this.http.get<any>(this.url + "asset/details?page="+ assetData.page +"&limit="+ assetData.limit +"&keyword=" + assetData.keyword, this.header);
  }
  getGLAccountNumbers(companyId: String) {
    return this.http.get<any>(this.url + "user/gl/accounts?cId="+ companyId, this.header);
  }

  getGEEntry(assetData: {woId:any; page: number; limit: number; keyword: string; }) {
    return this.http.get<any>(this.url + "ge/entry?woId="+ assetData.woId + "&page="+ assetData.page +"&limit="+ assetData.limit +"&keyword=" + assetData.keyword, this.header);
  }

  checkCompanyNumberAlreadyExist(obj: { exCompanyId: any; }) {
    return this.http.post<any>(this.url + "company/exist", obj, this.header);
  }

}
