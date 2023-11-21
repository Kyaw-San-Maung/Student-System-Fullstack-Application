package com.freddy.studentsystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.freddy.studentsystem.model.Student;
import com.freddy.studentsystem.service.StudentService;

@RestController
@RequestMapping("/student")
@CrossOrigin(origins  = "http://localhost:3000")
public class StudentController {
	@Autowired
	private StudentService studentService;
	
	@PostMapping("/add")
	public String add(@RequestBody Student student) {
		studentService.saveStudent(student);
		return "New student is added";
	}
	
	@GetMapping("/getAllStudent")
	public List<Student> getAllStu() {
		
		return studentService.getAllStudent();
	}
}
