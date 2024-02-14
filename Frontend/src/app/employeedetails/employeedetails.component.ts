import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrl: './employeedetails.component.css',
})
export class EmployeedetailsComponent implements OnInit {
  id!: number;
  employee!: Employee;
  constructor(
    private route: ActivatedRoute,
    private empService: EmployeeServiceService
  ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employee = new Employee();
    this.empService.getEmployeeById(this.id).subscribe({
      next: (data) => {
        this.employee = data;
      },
      error: (error) => {
        alert('Error fetching employee details!');
        console.log(error);
      },
    });
  }
}
