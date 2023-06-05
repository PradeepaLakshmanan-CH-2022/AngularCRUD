import { Component } from '@angular/core';
import { StudentClass } from '../student';
import { StudentServiceService } from '../student-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdatestudentComponent {

  id!: number;
  student: StudentClass = {
    studentId: 0,
    studentName: " ",
    course: " ",
    specialization: " ",
    studentPercentage: "",
    departmentId: 0,
  }
 public profileForm!: FormGroup;
  constructor(private studentservice: StudentServiceService, private router: Router, private formBuilder:FormBuilder, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.studentservice.getStudentById(this.id).subscribe(data => {

      this.student = data;
    }, error => console.log(error));
    this.profileForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
      });
  }


  saveDepartment() {
    this.studentservice.updateStudent(this.id, this.student).subscribe(data => {
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
    this.saveDepartment();
  }
}