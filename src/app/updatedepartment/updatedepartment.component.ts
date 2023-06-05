import { Component } from '@angular/core';
import { DepartmentClass } from '../department';
import { DepartmentServiceService } from '../department-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-updatedepartment',
  templateUrl: './updatedepartment.component.html',
  styleUrls: ['./updatedepartment.component.css']
})
export class UpdatedepartmentComponent {

  id!: number;
  public departmentForm !: FormGroup;
  department: DepartmentClass = {
    departmentId: 0,
    departmentName: " "
  }

  constructor(private departmentservice: DepartmentServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.departmentservice.getDepartmentById(this.id).subscribe(data => {
      this.department = data;
    }, error => console.log(error));
  }

  saveDepartment() {
    this.departmentservice.updateDepartment(this.id, this.department).subscribe(data => {
      console.log(data);
      this.goTodepartmentList();
    },
      error => console.log(error));

  }

  goTodepartmentList() {
    this.router.navigate(['/department']);
  }

  onSubmit() {
    console.log(this.department);
    this.saveDepartment();
  }
}
