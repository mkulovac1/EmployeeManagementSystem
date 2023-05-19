package com.employeeManagementSystem.controller;

import com.employeeManagementSystem.exception.ResourceNotFoundException;
import com.employeeManagementSystem.model.Employee;
import com.employeeManagementSystem.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
    @Autowired
    private EmployeeRepository employeeRepository;

    // daj sve zaposlenike:
    @GetMapping("/employees") // kad ukuca ovaj url, trigga se metoda getAllEmployees
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll(); // ugradjene metode jer EmployeeRepository nasljedjuje JpaRepository
    }

    // rest api za kreiranje uposlenika:
    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeRepository.save(employee); // integrisana metoda
    }

    // daj zaposlenika preko id-a:
    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
        Employee e = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with particular id: " + id));
        return ResponseEntity.ok(e);
    }

    // api za izmjenu uposlenika:
    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee e) {
        Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with particular id: " + id));
        employee.setFirstName(e.getFirstName());
        employee.setLastName(e.getLastName());
        employee.setEmailId(e.getEmailId());

        Employee update = employeeRepository.save(employee);

        return ResponseEntity.ok(update);
    }
}
