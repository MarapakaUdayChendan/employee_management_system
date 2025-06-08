package com.employee.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class EmployeeExceptionHandler {

	@ExceptionHandler(EmployeeRelatedException.class)
	public ResponseEntity<?> employeeRelatedexception(EmployeeRelatedException emprex) {
		return new ResponseEntity<>(emprex.getMsg(),HttpStatus.INTERNAL_SERVER_ERROR);
	}

}
