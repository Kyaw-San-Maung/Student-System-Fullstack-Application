package com.freddy.studentsystem.service;

import java.util.List;

import com.freddy.studentsystem.model.Student;

public interface StudentService {
	public Student saveStudent(Student student);
	public List<Student> getAllStudent(); 
}
