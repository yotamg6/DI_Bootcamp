-- CREATE TABLE items(
-- item VARCHAR(20) NOT NULL,
-- price SMALLINT NOT NULL 
-- )

-- INSERT INTO items (item, price) VALUES ('Small Desk', 100), ('Large Desk', 300), ('Fan', 80);

-- Add 5 new customers to the customers table:
-- Greg Jones
-- Sandra Jones
-- Scott Scott
-- Trevor Green
-- Melanie Johnson
-- CREATE TABLE customers (
-- first_name VARCHAR(20) NOT NULL,
-- last_name VARCHAR(20) NOT NULL
-- );

-- INSERT INTO customers (first_name, last_name) VALUES ('Greg', 'Jones'),('Sandra' ,'Jones'),('Scott', 'Scott'),('Trevor', 'Green'),('Melanie', 'Johnson');

-- Use SQL to fetch the following data from the database:
-- All the items.
-- SELECT * FROM items;
-- All the items with a price above 80 (80 not included).
-- SELECT * FROM items WHERE price>80;
-- All the items with a price below 300. (300 included)
-- SELECT * FROM items WHERE price<300;
-- All customers whose last name is ‘Smith’ (What will be your outcome?).only the table headers
-- SELECT * FROM customers WHERE last_name='Smith'; 
-- All customers whose last name is ‘Jones’.
-- SELECT * FROM customers WHERE last_name='Jones';
-- All customers whose firstname is not ‘Scott’.
-- SELECT * FROM customers WHERE NOT first_name='Scott';