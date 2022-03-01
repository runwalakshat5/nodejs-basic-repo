CREATE DATABASE studentdb
GO

USE studentdb
GO

CREATE TABLE student
(
	id INT IDENTITY(1,1), 
	name VARCHAR(50),
	email VARCHAR(50),
	city VARCHAR(50)
)
GO

SELECT * FROM student
GO

SELECT * FROM student WHERE Id =1
GO

INSERT INTO student (name, email, city) VALUES ('Scott', 'Scott@ef.com','Boston'),
                                               ('Adam', 'Adam@ef.com','Sydney'),
											   ('Taun', 'Tuan@ef.com','Vietnam')
GO

INSERT INTO student (name, email, city) VALUES ('hjdj', 'dsd@ef.com','dsds')
GO

UPDATE student SET name='Scott Desatnick',  email='Scott.Desatnick@ef.com', city='Bengaluru' WHERE id=1
GO

DELETE FROM student WHERE id=4 