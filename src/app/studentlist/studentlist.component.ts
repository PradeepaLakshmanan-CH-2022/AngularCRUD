import { Component } from '@angular/core';
import { StudentClass } from '../student';
import { StudentServiceService } from '../student-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent {

  studentlist: StudentClass[] | undefined;
  student: StudentClass = {
    studentId: 0,
    studentName: " ",
    course: " ",
    specialization: " ",
    studentPercentage: "",
    departmentId: 0,
  }
  constructor(private studentservice: StudentServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getstudent();
  }

  private getstudent() {
    this.studentservice.GetstudentListService().subscribe(data => {
      this.studentlist = data;
      console.log(this.studentlist);
    });
  }

  updateStudent(id: number) {
    this.router.navigate(['update-student', id]);
  }

  deleteStudent(id: number) {
    this.router.navigate(['delete-student', id]);
  }
}

