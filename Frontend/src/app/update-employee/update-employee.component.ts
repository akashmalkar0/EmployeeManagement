import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css',
})
export class UpdateEmployeeComponent implements OnInit {
  id!: number;
  employee: Employee = new Employee();

  constructor(
    private empService: EmployeeServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

  onSubmit() {
    this.empService.updateEmployee(this.id, this.employee).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate(['/allemployees']);
      },
      error: (error) => {
        alert('Error update user details!');
        console.log(error);
      },
    });
  }
}
