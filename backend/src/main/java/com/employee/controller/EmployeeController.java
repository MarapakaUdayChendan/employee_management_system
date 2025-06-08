package com.employee.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.employee.entity.EmployeeDetails;
import com.employee.exception.EmployeeExceptionHandler;
import com.employee.service.EmployeeService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class EmployeeController {

    private final EmployeeExceptionHandler employeeExceptionHandler;
	@Autowired
	private EmployeeService employeeService;

    EmployeeController(EmployeeExceptionHandler employeeExceptionHandler) {
        this.employeeExceptionHandler = employeeExceptionHandler;
    }

	@PostMapping("/employeeregistration")
	public ResponseEntity<?> employeeRegistration(@RequestBody EmployeeDetails employeeDetails) {
		System.out.println(employeeDetails);
		return employeeService.employeeRegsitration(employeeDetails);
	}

	@PutMapping("/updateemployee")
	public ResponseEntity<?> updateEmployeeDetails(@RequestBody EmployeeDetails employeeDetails) 
	{
		System.out.println(employeeDetails);
		return employeeService.updateEmployeeDetails(employeeDetails);
	}
	
	@DeleteMapping("/deleteemployee/{id}")
	public ResponseEntity<?> deleteEmployeeDetailsByID(@PathVariable int id)
	{
		return employeeService.deleteEmployeeDetailsByID(id);
	}
	
	@PostMapping("/loginemployee")
	public ResponseEntity<?> loginEmployee(@RequestBody EmployeeDetails employeeDetails)
	{
		String emailid = employeeDetails.getEmailid();
		String password = employeeDetails.getPassword();
		return employeeService.loginEmployee(emailid,password);
	}
}
