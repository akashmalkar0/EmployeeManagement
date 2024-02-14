import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-newemployee',
  templateUrl: './newemployee.component.html',
  styleUrl: './newemployee.component.css',
})
export class NewemployeeComponent implements OnInit {
  employee: Employee = new Employee();
  constructor(
    private empService: EmployeeServiceService,
    private router: Router
  ) {}
  userRole = localStorage.getItem('userrole');
  ngOnInit(): void {}

  newEmployee() {
    this.empService.newEmployee(this.employee).subscribe({
      next: (data) => {
        console.log(data);
        if (localStorage.getItem('userrole') == 'ADMIN') {
          this.router.navigate(['/allemployees']);
        } else if (localStorage.getItem('userrole') == 'USER') {
          alert('Employee saved successfully!');
        }
      },
      error: (error) => {
        alert('Error saving new employee!');
        console.log(error);
      },
    });
  }

  onSubmit() {
    console.log(this.employee);
    this.newEmployee();
  }
}
