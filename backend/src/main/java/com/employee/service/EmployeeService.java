package com.employee.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.employee.dao.EmployeeDAO;
import com.employee.entity.EmployeeDetails;
import com.employee.exception.EmployeeRelatedException;

@Service
public class EmployeeService {
	@Autowired
	private EmployeeDAO employeeDAO;

	public ResponseEntity<?> employeeRegsitration(EmployeeDetails employeeDetails) {

		if (employeeDetails == null) {
			throw new EmployeeRelatedException("Employee data is required.");
		}
		if (employeeDetails.getEmployeename() == null || employeeDetails.getEmployeename().isBlank()) {
			throw new EmployeeRelatedException("Employee name is required.");
		}
		if (employeeDetails.getEmailid() == null
				|| !employeeDetails.getEmailid().matches("^[\\w.-]+@[\\w.-]+\\.\\w{2,}$")) {
			throw new EmployeeRelatedException("Valid email ID is required.");
		}
		if (employeeDetails.getPassword() == null || employeeDetails.getPassword().length() < 6) {
			throw new EmployeeRelatedException("Password must be at least 6 characters long.");
		}
		if (employeeDetails.getEmployeesalary() <= 0) {
			throw new EmployeeRelatedException("Salary must be a positive number.");
		}
		if (employeeDetails.getEmployeedeptno() <= 0) {
			throw new EmployeeRelatedException("Department number must be a positive number.");
		}
		if (employeeDetails.getMobileNumber() < 1000000000L || employeeDetails.getMobileNumber() > 9999999999L) {
			throw new EmployeeRelatedException("Mobile number must be a 10-digit number.");
		}
		EmployeeDetails insertEmployeeDetails = employeeDAO.insertEmployeeDetails(employeeDetails);
		if (insertEmployeeDetails != null) {
			return new ResponseEntity<>("Data Inserted", HttpStatus.CREATED);
		} else {
			throw new EmployeeRelatedException("Server Error");
		}
	}

	public ResponseEntity<?> updateEmployeeDetails(EmployeeDetails employeeDetails) {
		if (employeeDetails.getEmployeeid() <= 0) {
			throw new EmployeeRelatedException("Invalid Employee ID.");
		}
		if (employeeDetails.getEmployeename() == null || employeeDetails.getEmployeename().isBlank()) {
			throw new EmployeeRelatedException("Employee name is required.");
		}
		if (employeeDetails.getEmailid() == null
				|| !employeeDetails.getEmailid().matches("^[\\w.-]+@[\\w.-]+\\.\\w{2,}$")) {
			throw new EmployeeRelatedException("Valid email ID is required.");
		}
		if (employeeDetails.getPassword() == null || employeeDetails.getPassword().length() < 6) {
			throw new EmployeeRelatedException("Password must be at least 6 characters long.");
		}
		if (employeeDetails.getEmployeesalary() <= 0) {
			throw new EmployeeRelatedException("Salary must be a positive number.");
		}
		if (employeeDetails.getEmployeedeptno() <= 0) {
			throw new EmployeeRelatedException("Department number must be a positive number.");
		}
		if (employeeDetails.getMobileNumber() < 1000000000L || employeeDetails.getMobileNumber() > 9999999999L) {
			throw new EmployeeRelatedException("Mobile number must be a 10-digit number.");
		}
		EmployeeDetails updatedEmployee = employeeDAO.updateEmployeeDetails(employeeDetails);
		if (updatedEmployee != null) {
			return new ResponseEntity<>(updatedEmployee, HttpStatus.ACCEPTED);
		} else {
			throw new EmployeeRelatedException("Server Error");
		}
	}

	public ResponseEntity<?> deleteEmployeeDetailsByID(int id) {
		if (id <= 0) {
			throw new EmployeeRelatedException("Invalid Employee ID.");
		}
		int result = employeeDAO.deleteEmployeeDetailsByID(id);
		if (result >= 1) {
			return new ResponseEntity<>("Data Deleted", HttpStatus.OK);
		} else {
			throw new EmployeeRelatedException("Server Error");
		}
	}

	public ResponseEntity<?> loginEmployee(String emailid, String password) {
		if (emailid == null || !emailid.matches("^[\\w.-]+@[\\w.-]+\\.\\w{2,}$")) {
			throw new EmployeeRelatedException("Enter a valid Email ID.");
		}
		if (password == null || password.isBlank()) {
			throw new EmployeeRelatedException("Password cannot be empty.");
		}
		EmployeeDetails loginEmployee = employeeDAO.loginEmployee(emailid);
		if (loginEmployee == null) {
			throw new EmployeeRelatedException("Email ID does not exist.");
		}
		if (!loginEmployee.getPassword().equals(password)) {
			throw new EmployeeRelatedException("Incorrect password.");
		}
		return new ResponseEntity<>(loginEmployee, HttpStatus.OK);
	}

}
