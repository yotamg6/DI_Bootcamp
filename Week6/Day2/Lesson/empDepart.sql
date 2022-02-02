-- STEP THREE:  Display DATA


-- 2. How many employees are analyst in dept 10.




-- SELECT* FROM EMPLOYEE;
-- SELECT * FROM department;
-- ALTER TABLE employee RENAME COLUMN deptcode TO departmentCode;
-- 1. How many employees are in dept 10.
-- -- SELECT COUNT(*)
-- -- FROM employee
-- -- INNER JOIN department
-- -- ON departmentCode = deptcode
-- -- WHERE deptcode=10;
-- 3. Display the names of each employees, their job and dept location
-- -- SELECT employee.empfname, employee.job,department.location
-- -- FROM employee
-- -- INNER JOIN department 
-- -- ON departmentCode=deptcode;
-- 4. Find the avg salary of the software engineers
-- -- SELECT ROUND(AVG(salary)) AS avgSalary FROM employee WHERE job='SOFTWARE ENGINEER';
-- 5. Which join should we use to display the employee 9777 even if he has no deptcode?
-- -- SELECT empfname
-- -- FROM employee
-- -- CROSS JOIN department
-- -- WHERE empcode=9777;
-- 6.Create a query that displays EMPFNAME, EMPLNAME, DEPTCODE, DEPTNAME, 
-- -- LOCATION from EMPLOYEE, and DEPARTMENT tables. 
-- -- Make sure the results are in the ascending order based on the 
-- -- EMPFNAME and LOCATION of the department.
-- -- SELECT employee.empfname, employee.emplname, employee.departmentCode, department.deptname, department.location
-- -- FROM employee
-- -- INNER JOIN department
-- -- ON departmentCode=deptcode
-- -- ORDER BY employee.empfname, department.location ASC;
-- 7.  Display EMPFNAME and "TOTAL SALARY" for each employee (commission and salary)
-- -- SELECT empfname, SUM(salary+commission) AS totalSalary FROM employee GROUP BY empfname; 
-- 8. Display MAX SALARY from the EMPLOYEE table.
-- -- SELECT MAX(salary) AS highestSalary FROM employee;





