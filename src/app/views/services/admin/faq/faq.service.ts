import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SharedService } from '../../shared.service';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

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
      this.url = `${environment.BASE_URL}common/admin/`;
    } else {
      this.url = `${environment.BASE_URL}common/user/`;
    }
  }

  getBlogs(blogsData: { page: number; limit: number; keyword: string; }) {
    return this.http.get(this.url + "blog/searchBlogs?page=" + blogsData.page + "&pageSize=" + blogsData.limit + "&key=" + blogsData.keyword , this.header);
  }

  updateStatus(blogsData: { id: any; commonStatus: any; }) {
    return this.http.post(this.url + "blogs/status", blogsData, this.header);
  }

  createOrUpdateBlog(obj: { id: any; topic: any; description: any; type: any }) {
    return this.http.post(this.url + "blogs", obj, this.header);
  }

}
