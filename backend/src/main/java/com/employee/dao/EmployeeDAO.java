package com.employee.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.employee.entity.EmployeeDetails;
import com.employee.repsitory.EmployeeRepository;

@Repository
public class EmployeeDAO {

	@Autowired
	private EmployeeRepository employeeRepository;

	public EmployeeDetails insertEmployeeDetails(EmployeeDetails employeeDetails) {

		return employeeRepository.save(employeeDetails);
	}

	public EmployeeDetails updateEmployeeDetails(EmployeeDetails employeeDetails) {
		return employeeRepository.save(employeeDetails);
	}

	public int deleteEmployeeDetailsByID(int id) {
		return employeeRepository.removeByEmployeeid(id);
	}

	public EmployeeDetails loginEmployee(String emailid) {
		EmployeeDetails emp = employeeRepository.findByEmailid(emailid);
		return emp;
	}

}
