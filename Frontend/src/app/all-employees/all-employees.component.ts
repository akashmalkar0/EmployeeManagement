import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrl: './all-employees.component.css',
})
export class AllEmployeesComponent implements OnInit {
  employees!: Employee[];
  constructor(
    private empService: EmployeeServiceService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getEmployees();
  }

  employeedetails(id: number) {
    this.router.navigate(['employeedetails', id]);
  }

  updateemployee(id: number) {
    this.router.navigate(['updateemployee', id]);
  }

  deleteemployee(id: number) {
    this.empService.deleteEmployee(id).subscribe({
      next: (data) => {
        console.log(data);
        this.getEmployees();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  private getEmployees() {
    this.empService.getEmployeesList().subscribe({
      next: (data) => {
        this.employees = data;
      },
      error: (error) => {
        alert('Error fetching list of employees!');
        console.log(error);
      },
    });
  }
}
