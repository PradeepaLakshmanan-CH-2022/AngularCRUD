import { Component } from '@angular/core';
import { DepartmentClass } from '../department';
import { DepartmentServiceService } from '../department-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departmentlist',
  templateUrl: './departmentlist.component.html',
  styleUrls: ['./departmentlist.component.css']
})
export class DepartmentlistComponent {
  departmentlist: DepartmentClass[] | undefined;
  department: DepartmentClass = {

    departmentId: 0,
    departmentName: ""
  }

  constructor(private departmentservice: DepartmentServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getdepartment();
  }

  private getdepartment() {
    this.departmentservice.GetDepartmentListService().subscribe(data => {
      this.departmentlist = data;
      console.log(this.departmentlist);
    });
  }

  updateDepartment(id: number) {
    this.router.navigate(['update-department', id]);
  }

  deleteDepartment(id: number) {
    this.router.navigate(['delete-department', id]);
  }
}
