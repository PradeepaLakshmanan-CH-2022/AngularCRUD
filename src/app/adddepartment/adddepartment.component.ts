import { Component } from '@angular/core';
import { DepartmentServiceService } from '../department-service.service';
import { Router } from '@angular/router';
import { DepartmentClass } from '../department';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adddepartment',
  templateUrl: './adddepartment.component.html',
  styleUrls: ['./adddepartment.component.css']
})
export class AdddepartmentComponent {
  id!: number;
  public departmentForm !: FormGroup;
 public department=new DepartmentClass()
 

 

  constructor(private departmentservice: DepartmentServiceService, private formBuilder:FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.departmentForm = this.formBuilder.group({
      // departmentId: ['', Validators.required],
      departmentName: ['', Validators.required]
    });
  }
  // department: DepartmentClass = {
  //   departmentId: this.departmentForm.value.departmentId,
  //       departmentName: this.departmentForm.value.departmentName
  // }


  saveDepartment() {
   // departmentId: this.departmentForm.value.departmentId,
   this.department.departmentName=this.departmentForm.value.departmentName
    this.departmentservice.createDepartment(this.department).subscribe(data => {
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