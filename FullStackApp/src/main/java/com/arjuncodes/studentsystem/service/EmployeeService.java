package com.arjuncodes.studentsystem.service;



import com.arjuncodes.studentsystem.DTO.EmployeeDTO;
import com.arjuncodes.studentsystem.DTO.LoginDTO;
import com.arjuncodes.studentsystem.payload.responses.LoginMessage;

public interface EmployeeService {
    String addEmployee(EmployeeDTO employeeDTO);

    LoginMessage loginEmployee(LoginDTO loginDTO);

}
