import { Component } from '@angular/core';
import { DepartmentClass } from '../department';
import { DepartmentServiceService } from '../department-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deletedepartment',
  templateUrl: './deletedepartment.component.html',
  styleUrls: ['./deletedepartment.component.css']
})
export class DeletedepartmentComponent {
  id!: number;
  department: DepartmentClass = {

    departmentId: 0,
    departmentName: ""
  }

  constructor(private departmentservice: DepartmentServiceService, private route: ActivatedRoute, private router: Router) { }



  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.departmentservice.getDepartmentById(this.id).subscribe(data => {
      this.department = data;
    })
  }


  onSubmit() {
    this.departmentservice.deleteDepartment(this.id).subscribe(data => {
      this.goTodepartmentList();
    }
      , error => console.log(error));

  }


  goTodepartmentList() {
    this.router.navigate(['/department']);
  }
}
