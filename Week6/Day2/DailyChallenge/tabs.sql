-- DELETE FROM FirstTab;
-- CREATE TABLE FirstTab (
--      id integer, 
--      name VARCHAR(10)
-- );

-- INSERT INTO FirstTab VALUES
-- (5,'Pawan'),
-- (6,'Sharlee'),
-- (7,'Krish'),
-- (NULL,'Avtaar');

-- SELECT * FROM FirstTab

-- CREATE TABLE SecondTab (
--     id integer 
-- );

-- INSERT INTO SecondTab VALUES
-- (5),
-- (NULL);


-- SELECT * FROM SecondTab;



-- DATA
-- Table1 – FirstTab
-- ID  Name
-- 5   Pawan
-- 6   Sharlee
-- 7   Krish
-- NULL    Avtaar


-- Table2 – SecondTab
-- ID
-- 5
-- NULL

-- Q1. What will be the OUTPUT of the following statement? // results in 0. NULL can be any record. cannot respond to the request

-- SELECT COUNT(*) 
-- FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL );

-- Q2. What will be the OUTPUT of the following statement? 2

--     SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 );//

-- Q3. What will be the OUTPUT of the following statement? 0. null can be any record,
-- it doesn't know how many like that are in the list.


--     SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab ); 

-- Q4. What will be the OUTPUT of the following statement?//2

    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL );



