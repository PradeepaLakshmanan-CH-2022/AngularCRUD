import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DepartmentClass } from './department';
import { StudentClass } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  readonly apiurl = "https://localhost:7125/api/Students";
  readonly loginurl = "https://localhost:7125/api/User/";
  constructor(private http: HttpClient) { }
  GetstudentListService(): Observable<any[]> {
    return this.http.get<any>(this.apiurl)
  }
  createStudent(student: StudentClass): Observable<Object> {
    return this.http.post(`${this.apiurl}`, student);
  }

  getStudentById(id: number): Observable<StudentClass> {
    return this.http.get<StudentClass>(`${this.apiurl}/${id}`);
  }


  updateStudent(id: number, student: StudentClass): Observable<Object> {
    return this.http.put(`${this.apiurl}/${id}`, student);
  }

  deleteStudent(id: number): Observable<Object> {
    return this.http.delete(`${this.apiurl}/${id}`);
  }

  signUp(stuobj: any) {
    return this.http.post<any>(`${this.loginurl}SignUp`, stuobj)
  }

  login(stuobj: any) {
    return this.http.post<any>(`${this.loginurl}Authenticate`, stuobj)
  }

}
