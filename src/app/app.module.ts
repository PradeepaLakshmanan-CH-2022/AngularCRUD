import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { DepartmentlistComponent } from './departmentlist/departmentlist.component';
import { AdddepartmentComponent } from './adddepartment/adddepartment.component';
import { UpdatedepartmentComponent } from './updatedepartment/updatedepartment.component';
import { DeletedepartmentComponent } from './deletedepartment/deletedepartment.component';
// import { AddStudentComponent } from './add-student/add-student.component';
// import { UpdateStudentComponent } from './update-student/update-student.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { AddstudentComponent } from './addstudent/addstudent.component';

import { StudentlistComponent } from './studentlist/studentlist.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ImagecompComponent } from './imagecomp/imagecomp.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentlistComponent,
    AdddepartmentComponent,
    // UpdatedepartmentComponent,
    // DeletedepartmentComponent,

    DeleteStudentComponent,
    UpdatedepartmentComponent,
    UpdatestudentComponent,
    AddstudentComponent,

    StudentlistComponent,
     SignupComponent,
     LoginComponent,
     NavbarComponent,
     ImagecompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
