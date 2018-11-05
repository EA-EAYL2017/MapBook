-- set @username := 'map_book';
-- set @password := 'password';

USE MapBook;

DROP TABLE Course_Trainer;

ALTER TABLE Courses ADD trainer_name VARCHAR(30);