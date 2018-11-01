-- set @username := 'map_book';
-- set @password := 'password';

USE MapBook;

ALTER TABLE Courses ADD description VARCHAR(600); 
ALTER TABLE Courses ADD target_audience VARCHAR(75); 
ALTER TABLE Courses ADD duration VARCHAR(15); 

CREATE TABLE IF NOT EXISTS Course_Trainer (
    course_id INT NOT NULL,
	trainer_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (course_id, trainer_name),
    FOREIGN KEY(course_id) REFERENCES Courses(id)
);