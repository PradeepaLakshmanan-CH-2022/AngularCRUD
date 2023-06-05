import { Component } from '@angular/core';
import { StudentClass } from '../student';
import { StudentServiceService } from '../student-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent {
  id!: number;

  student: StudentClass = {
    studentId: 0,
    studentName: " ",
    course: " ",
    specialization: " ",
    studentPercentage: "",
    departmentId: 0,

  }

  constructor(private studentservice: StudentServiceService, private route: ActivatedRoute, private router: Router) { }



  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.studentservice.getStudentById(this.id).subscribe(data => {
      this.student = data
    })
  }


  onSubmit() {
    this.studentservice.deleteStudent(this.id).subscribe(data => {
      this.goToStudentList();
    }

      , error => console.log(error));

  }

  goToStudentList() {
    this.router.navigate(['/student']);
  }
}


