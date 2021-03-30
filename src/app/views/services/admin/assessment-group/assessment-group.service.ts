import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AssessmentGroupService {

  private url = `${environment.BASE_URL}tax/admin/`;
  
  private header = { 
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'No-Auth': 'True' 
    }) 
  }

  constructor(private http: HttpClient) { }

  getAssessmentGroup(assessmentGroupData: { page: number; limit: number; keyword: string; }) {
    return this.http.get(this.url + "AssessmentGroup/List?page=" + assessmentGroupData.page + "&limit=" + assessmentGroupData.limit + "&keyword=" + assessmentGroupData.keyword, this.header);
  }

  createOrUpdateAssessmentGroup(assessmentGroupData: any) {
    return this.http.post(this.url + "AssessmentGroup/create", assessmentGroupData, this.header);
  }

  updateStatus(assessmentGroupData: { id: any; commonStatus: any; }) {
    return this.http.post(this.url + "AssessmentGroup/updateStatus", assessmentGroupData, this.header);
  }
}
