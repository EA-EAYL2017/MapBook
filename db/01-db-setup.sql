-- set @username := 'employee_manager';
-- set @password := 'password';

-- make sure the running user has these permissions (to allow granting)
-- GRANT ALL PRIVILEGES ON *.* TO '<user name>'@'localhost' WITH GRANT OPTION;
-- the line above should be the output of this query:

-- show grants;

-- Ensure clean state each time
CREATE DATABASE IF NOT EXISTS EmployeeManager;
USE EmployeeManager;
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
	'GRANT SELECT,INSERT ON EmployeeManager.* TO "',@username,
    '"@"localhost" IDENTIFIED BY "',@password,'"'
);
PREPARE stmt FROM @query1;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

-- Tables
CREATE TABLE IF NOT EXISTS Employees (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(30),
    address VARCHAR(90),
    national_insurance VARCHAR(13),
    bic_iban CHAR(22),
    salary DECIMAL(11, 2)
);