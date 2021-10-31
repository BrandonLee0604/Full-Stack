package com.example.demo.student;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

// Responsible for data access
@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {

    //This will transfer to an SQL
    //@Query("SELECT s FROM Student s WHERE s.email = ?1");
    Optional<Student> findStudentByEmail(String email);
}
