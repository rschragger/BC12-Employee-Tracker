INSERT INTO department (id, name)
VALUES (001, "Sales"),
(002, "Engineering"),
(003, "Finance"),
(004, "Admin"),
(005, "Legal");
       
INSERT INTO role (id, title, salary, department_id)
VALUES 
(001, "Salesperson", 60000, 001 ),
(002, "Junior Engineer", 75000, 002 ),
(003, "Accountant", 85000, 003 ),
(004, "Paralegal", 75000, 005 ),
(005, "Project Manager", 90000, 002 ),
(006, "General Manager", 150000, 004 ),
(007, "Senior Counsel", 150000, 005 ),
(008, "Office Admin", 60000, 004 )
;
       
INSERT INTO employee (id, first_name, last_name, role_id,manager_id)
VALUES 
(001, "Jimmy","James", 002 , 002 ),
(002, "Sam","Smithson", 005 , 004 ),
(003, "Althea","Brooks", 003 , 004 ),
(004, "Roger","Rollerson", 006 , 004 ),
(005, "Adam","Cameron", 002 , 002 ),
(006, "Beth","Younger", 004 , 007 ),
(007, "Hayley","Kwong", 007 , 004 ),
(008, "Bruce","Ansel", 008 , 001 )
;



