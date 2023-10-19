create database employees;
USE employees;
CREATE TABLE people (
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
email VARCHAR(40) NOT NULL,
first_name VARCHAR(40) NOT NULL,
last_name VARCHAR(40) NOT NULL
);

show databases;

INSERT INTO people (email, first_name, last_name)
VALUES 
 ('john@gmail.com', 'John', 'Smith'),
 ('smith@yahoo.co.uk', 'John', 'Smith'),
 ('peter@gmail.com', 'Peter', 'White'),
 ('anne@anne.com', 'Anne', 'Green'),
 ('jason.jj@gmail.com', 'Jason', 'Anderson');
 
SELECT * FROM people

select * from people where id > 2 and id < 5
order by id desc;people

select first_name, last_name 
from people
order by last_name desc;

select * from people;

update people
set last_name = 'Adams'
where id = 4;

delete from people where id = '4';

truncate table people;