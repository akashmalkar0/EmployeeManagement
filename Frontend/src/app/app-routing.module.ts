import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { NewemployeeComponent } from './newemployee/newemployee.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { hasRoleGuard } from './has-role.guard';

const routes: Routes = [
  {
    path: 'allemployees',
    component: AllEmployeesComponent,
    canActivate: [hasRoleGuard],
    data: { expectedRole: 'ADMIN' },
  },
  {
    path: 'newemployee',
    component: NewemployeeComponent,
  },
  {
    path: 'employeedetails/:id',
    component: EmployeedetailsComponent,
    canActivate: [hasRoleGuard],
    data: { expectedRole: 'ADMIN' },
  },
  {
    path: 'updateemployee/:id',
    component: UpdateEmployeeComponent,
    canActivate: [hasRoleGuard],
    data: { expectedRole: 'ADMIN' },
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
