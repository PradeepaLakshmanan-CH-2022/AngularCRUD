import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentlistComponent } from './departmentlist/departmentlist.component';
import { AdddepartmentComponent } from './adddepartment/adddepartment.component';
import { UpdatedepartmentComponent } from './updatedepartment/updatedepartment.component';
import { DeletedepartmentComponent } from './deletedepartment/deletedepartment.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ImagecompComponent } from './imagecomp/imagecomp.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'department', component: DepartmentlistComponent ,canActivate:[AuthGuard]},
  { path: 'image', component: ImagecompComponent ,canActivate:[AuthGuard]},
  { path: 'create-department', component: AdddepartmentComponent ,canActivate:[AuthGuard]},

  { path: 'update-department/:id', component: UpdatedepartmentComponent ,canActivate:[AuthGuard]},

  { path: 'delete-department/:id', component: DeletedepartmentComponent,canActivate:[AuthGuard] },
  { path: 'navbar', component: NavbarComponent,canActivate:[AuthGuard]},

  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'student', component: StudentlistComponent,canActivate:[AuthGuard] },

  { path: 'create-student', component: AddstudentComponent,canActivate:[AuthGuard] },

  { path: 'update-student/:id', component: UpdatestudentComponent ,canActivate:[AuthGuard]},

  { path: 'delete-student/:id', component: DeleteStudentComponent, canActivate:[AuthGuard]},


  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
