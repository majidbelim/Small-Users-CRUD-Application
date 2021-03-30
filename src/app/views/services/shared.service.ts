import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class SharedService {

  public user: any;
  public id: any;
  public role: any;
  public access_token: any;
  public tempId: any;
  public company: any;
  public companyId: any;

  private userListData = new Subject<any>();

  storeUserListData(userListData: any) {
    this.userListData.next( userListData );
  
}

getUserListData(): Observable<any> {
    return this.userListData.asObservable();
}


  setUserId(userId: any) {
    this.id = userId;
    localStorage.setItem("USER_ID", userId);
  }

  getUserId() {
    return localStorage.getItem("USER_ID");
  }

  setCompany(company: any) {
    this.company = company;
    localStorage.setItem("SELECTED_COMPANY", JSON.stringify(company));
  }

  getCompany() {
    let company;
    if (this.user) {
      company = this.company;
    } else {
      company = JSON.parse(localStorage.getItem("SELECTED_COMPANY"));
    }
    return company;
  }

  setCompanyId(companyId: any) {
    localStorage.setItem("SELECTED_COM_ID", companyId);
  }

  getCompanyId() {
    return localStorage.getItem("SELECTED_COM_ID");
  }

  setAccessToken(access_token: any) {
    this.access_token = access_token;
    localStorage.setItem("ACCESS_TOKEN", access_token);
  }

  getAccessToken() {
    let token;
    if (this.access_token) {
      token = this.access_token;
    } else {
      token = localStorage.getItem("ACCESS_TOKEN");
    }
    return token;
  }

  setUser(user: any) {
    this.user = user;
    localStorage.setItem("USER", JSON.stringify(user));
  }

  getUser() {
    let user;
    if (this.user) {
      user = this.user;
    } else {
      user = JSON.parse(localStorage.getItem("USER"));
    }
    return user;
  }

  setRole(role: any) {
    this.role = role;
    localStorage.setItem("userRole", role);
  }

  getRole() {
    let role;
    if (this.role) {
      role = this.id;
    } else {
      role = localStorage.getItem("userRole");
    }
    return role;
  }

  setTempId(tempId: any) {
    localStorage.setItem("tempId", tempId);
  }

  getTempId() {
    return localStorage.getItem("tempId");
  }

  clearTempId() {
    localStorage.setItem("tempId", "");
  }
  setSubUserPermissions(permissions: any) {
    localStorage.setItem("permissions",permissions);
  }
  getSubUserPermissions() {
    return JSON.parse(localStorage.getItem("permissions"));
  }
}
