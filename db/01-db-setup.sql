-- set @username := 'map_book';
-- set @password := 'password';

-- make sure the running user has these permissions (to allow granting)
-- GRANT ALL PRIVILEGES ON *.* TO '<user name>'@'localhost' WITH GRANT OPTION;
-- the line above should be the output of this query:

-- show grants;

-- Ensure clean state each time
CREATE DATABASE IF NOT EXISTS MapBook;
USE MapBook;
SET @query1 = CONCAT('DROP USER IF EXISTS "',@username,'"@"localhost"');
PREPARE stmt FROM @query1;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

-- Add application user
SET @query1 = CONCAT('CREATE USER "',@username,'"@"localhost" IDENTIFIED BY "',@password,'" ');
PREPARE stmt FROM @query1;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

SET @query1 = CONCAT(
	'GRANT SELECT,INSERT ON MapBook.* TO "',@username,
    '"@"localhost" IDENTIFIED BY "',@password,'"'
);
PREPARE stmt FROM @query1;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

-- Tables
CREATE TABLE IF NOT EXISTS Courses (
	id INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(45),
    date DATETIME,
    location VARCHAR(30)
);

-- Sample data
INSERT INTO Courses VALUES ("Apprentice Development Programme", '2018-12-01 09:00:00', "Belfast");
INSERT INTO Courses VALUES ("Engineering Academy", '2018-12-18 09:00:00', "Belfast");
INSERT INTO Courses VALUES ("Consultant Development Programme", '2018-12-02 09:00:00', "Castleward");
INSERT INTO Courses VALUES ("Management Development Programme", '2019-01-10 09:00:00', "Belfast");
INSERT INTO Courses VALUES ("Kainos Principals Programme", '2018-12-05 09:00:00', "Belfast");
INSERT INTO Courses VALUES ("Sales Development Programme", '2018-12-15 09:00:00', "Belfast");
INSERT INTO Courses VALUES ("Kimble Training", '2019-06-21 09:00:00', "Belfast");
INSERT INTO Courses VALUES ("Introduction to Serverless", '2019-07-25 09:00:00', "Gdansk");
INSERT INTO Courses VALUES ("Crucial Conversations", '2019-02-11 09:00:00', "London");
INSERT INTO Courses VALUES ("Presales Orientation", '2018-12-01 09:00:00', "Online");