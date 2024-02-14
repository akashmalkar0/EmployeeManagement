package com.emp.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.emp.model.Employee;
import com.emp.repo.EmployeeRepo;

@Service
public class EmployeeServiceImpl{
	@Autowired
	private EmployeeRepo empRepo;

	public List<Employee> getAllEmployees() {
		return empRepo.findAll();
	}

	public Employee getEmployeeById(long id) {
		Optional<Employee> e1=empRepo.findById(id);
		Employee emp=null;
		if(e1.isPresent()) {
			emp=e1.get();
		}
		else {
			throw new RuntimeException("Employee not found with the id: "+id);
		}
		return emp;
	}

	public Employee saveEmployee(Employee employee) {
		return empRepo.save(employee);
		
	}

	public Employee updateEmployee(long id,Employee employee) {
		Employee emp1=getEmployeeById(id);
		if(emp1!=null) {
			emp1.setFirstName(employee.getFirstName());
			emp1.setLastName(employee.getLastName());
			emp1.setEmail(employee.getEmail());
			Employee updatedEmp=empRepo.save(emp1);
			return updatedEmp;
		}
		else {
			throw new RuntimeException("Employee not found with id: "+id);
		}
	}

	public Map<String,Boolean> deleteEmployeeById(long id) {
		Employee emp1=getEmployeeById(id);
		if(emp1!=null) {
			empRepo.delete(emp1);
			Map<String,Boolean> res=new HashMap<>();
			res.put("deleted", true);
			return res;
		}
		else {
			throw new RuntimeException("Employee not found with id: "+id);		
			}
	}
}
