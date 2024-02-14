import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeServiceService {
  constructor(private httpClient: HttpClient) {}

  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(
      'http://localhost:8082/employee/allEmployees'
    );
  }

  newEmployee(employee: Employee): Observable<Object> {
    return this.httpClient.post(
      'http://localhost:8082/employee/saveEmployee',
      employee
    );
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(
      `http://localhost:8082/employee/employeeById/${id}`
    );
  }

  updateEmployee(id: number, employee: Employee): Observable<Object> {
    return this.httpClient.put(
      `http://localhost:8082/employee/updateEmployee/${id}`,
      employee
    );
  }

  deleteEmployee(id: number): Observable<Object> {
    return this.httpClient.delete(
      `http://localhost:8082/employee/deleteEmployee/${id}`
    );
  }
}
