-- set @username := 'map_book';
-- set @password := 'password';

USE MapBook;

CREATE TABLE IF NOT EXISTS Course_Employee (
    course_id VARCHAR(30) NOT NULL,
    employee_email VARCHAR(40) NOT NULL,
    employee_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (course_id, employee_email),
    FOREIGN KEY (course_id) REFERENCES Courses(id)
);
