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
SET @query1 = CONCAT('CREATE USER "',@username,'"@"localhost" IDENTIFIED WITH mysql_native_password BY "',@password,'" ');
PREPARE stmt FROM @query1;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

SET @query1 = CONCAT(
	'GRANT SELECT,INSERT ON MapBook.* TO "',@username,
    '"@"localhost"'
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