package com.employee.repsitory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import com.employee.entity.EmployeeDetails;

public interface EmployeeRepository extends JpaRepository<EmployeeDetails, Integer>
{
	@Transactional
	int removeByEmployeeid(int id);
	@Transactional
	EmployeeDetails findByEmailid(String emailid);
}
