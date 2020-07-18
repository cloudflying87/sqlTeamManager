USE employeetracker_db;

INSERT INTO department (name) values ("Human Resources");
INSERT INTO department (name) values ("Research and Development");
INSERT INTO department (name) values ("Marketing");
INSERT INTO department (name) values ("Accounting");
INSERT INTO department (name) values ("Production");

INSERT INTO role (title,salary,department_id) values ('manager',75000.00,1),('manager',85000.00,2),('manager',80000.00,3),('manager',90000.00,4),('manager',95000.00,5),('secretary',40000.00,1),('secretary',40000.00,2),('secretary',40000.00,3),('secretary',40000.00,4),('secretary',40000.00,5),('engineer',80000.00,5),('engineer',80000.00,2),('sales representative',65000.00,3),('cpa',72000.00,5);

INSERT INTO employee (first_name,last_name,role_id,manager_id) values ('Albina','Barton',1,NULL),('Edmund','Franecki',2,NULL),('Otha','Jakubowski',3,NULL),('Evangeline','Rowe',4,NULL),('Pink','Legros',5,NULL),('Jessica','Jaskolski',6,1),('Nia','Boyer',7,2),('Kaylin','Boyer',8,3),('Jocelyn','Lakin',9,4),('Ara','Stiedemann',10,5),('Mariana','Robel',11,5),('Shayna','Reichel',12,2),('Jeramie','Smitham',13,3),('Alejandrin','Medhurst',14,4),('Sidney','Fritsch',11,5),('Sonya','Bradtke',12,5),('Reyes','Harvey',12,5),('Vincenza','Blick',12,5),('Ethelyn','Jacobs',11,2),('Estevan','Little',11,2),('Alejandrin','Volkman',13,3);
