import { Component } from '@angular/core';
import { StudentClass } from '../student';
import { StudentServiceService } from '../student-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent {
  id!: number;
  public studentForm !: FormGroup;
  public student=new StudentClass()
  
 
  
 
   constructor(private studentservice: StudentServiceService, private formBuilder:FormBuilder, private router: Router) { }
 
   ngOnInit(): void {
     this.studentForm = this.formBuilder.group({
        departmentId: ['', Validators.required],
       studentName:['', Validators.required],
         course:['', Validators.required],
         specialization: ['', Validators.required],
         studentPercentage:['', Validators.required],
       
     });
   }
  // student: StudentClass = {
  //   studentId: 0,
  //   studentName: " ",
  //   course: " ",
  //   specialization: " ",
  //   studentPercentage: "",
  //   departmentId: 0,
  // }
 // constructor(private studentservice: StudentServiceService, private router: Router) { }

  // ngOnInit(): void {
  // }
  

  saveStudent() {
    this.student.studentName=this.studentForm.value.studentName,
    this.student.course=this.studentForm.value.course
    this.student.specialization=this.studentForm.value.specialization
    this.student.studentPercentage=this.studentForm.value.studentPercentage
    this.student.departmentId=this.studentForm.value.departmentId
    this.studentservice.createStudent(this.student).subscribe(data => {
      console.log(data);
      this.goTostudentList();
    },
      error => console.log(error));
  }



  goTostudentList() {
    this.router.navigate(['/student']);
  }

  onSubmit() {
    console.log(this.student);
    this.saveStudent();
  }
}