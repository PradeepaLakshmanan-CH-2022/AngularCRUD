import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DepartmentClass } from './department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentServiceService {

  readonly apiurl = "https://localhost:7125/api/Departments";
  constructor(private http: HttpClient) { }
  GetDepartmentListService(): Observable<any[]> {
    return this.http.get<any>(this.apiurl)
  }

  createDepartment(dept: DepartmentClass): Observable<Object> {
    return this.http.post(`${this.apiurl}`, dept);
  }


  getDepartmentById(id: number): Observable<DepartmentClass> {
    return this.http.get<DepartmentClass>(`${this.apiurl}/${id}`);
  }

  updateDepartment(id: number, dept: DepartmentClass): Observable<Object> {
    return this.http.put(`${this.apiurl}/${id}`, dept);
  }

  deleteDepartment(id: number): Observable<Object> {
    return this.http.delete(`${this.apiurl}/${id}`);

  }

}
