package com.example.demo.student;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Configuration
public class StudentConfig {

    @Bean
    CommandLineRunner commandLineRunner(StudentRepository repository){
        return args -> {
            Student brandon = new Student(
                    "Brandon",
                    LocalDate.of(1994, Month.JUNE, 4),
                    "brandon@gmail.com"
            );

            Student alex = new Student(
                    "Alex",
                    LocalDate.of(2004, Month.JUNE, 4),
                    "alex@gmail.com"
            );

            repository.saveAll(
                    List.of(brandon, alex)
            );
        };
    }
}
