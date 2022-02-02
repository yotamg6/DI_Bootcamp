-- Create a table called orders and a table called items. You decide which fields should be in each table, although make sure the items table has a column called price.

-- There should be a one to many relationship between the orders table and the items table.
-- An order can have many items, but an item can belong to only one order.

-- Create a function that returns the total price for a given order.

-- CREATE TABLE orders(
-- order_id SERIAL PRIMARY KEY,
-- order_date DATE NOT NULL
-- );

-- CREATE TABLE items(
-- 	item_id SERIAL PRIMARY KEY,
-- 	item_name VARCHAR(20),
-- 	price INTEGER NOT NULL,
-- 	ref_order_id INTEGER REFERENCES orders(order_id) ON DELETE SET NULL DROP CASCADE
-- );

-- INSERT INTO orders(order_date)
-- VALUES ('2010-04-05'), ('2011-09-02'), ('2012-08-02'), ('2014-06-03'), ('2013-03-20'), ('2020-10-09');

-- INSERT INTO items(item_name, price, ref_order_id)
-- VALUES ('chair', 30, (SELECT order_id FROM orders WHERE order_date = '2010-04-05')),
-- ('table', 40, (SELECT order_id FROM orders WHERE order_date = '2010-04-05')),
--  ('carpet', 50, (SELECT order_id FROM orders WHERE order_date = '2010-04-05')),
--  ('curtains', 100, (SELECT order_id FROM orders WHERE order_date = '2011-09-02')),
--  ('lamp', 200, (SELECT order_id FROM orders WHERE order_date = '2012-08-02')),
--  ('couch', 500, (SELECT order_id FROM orders WHERE order_date = '2012-08-02'));

-- -- SELECT * FROM items;

-- -- CREATE FUNCTION total_price (ord_date DATE)
-- -- RETURNS INTEGER
-- -- LANGUAGE plpgsql
-- -- AS
-- -- $$
-- -- DECLARE
-- --  total_price INTEGER;
-- -- BEGIN
-- --  SELECT sum(items.price)
-- --  FROM items
-- --  INNER JOIN orders
-- --  ON ref_order_id=order_id
-- --  WHERE ord_date=orders.order_date
-- --  INTO total_price;
-- --  RETURN total_price;
-- --  END;
-- --  $$
-- --  
-- SELECT total_price('2010-04-05');
-- 
-- Bonus :
-- Create a table called users.
-- There should be a one to many relationship between the users table and the orders table.
-- Create a function that returns the total price for a given order of a given user.

-- DROP TABLE orders;
-- DROP TABLE items;

-- CREATE TABLE users (
-- user_id SERIAL PRIMARY KEY,
-- user_fname VARCHAR(20),
-- );

-- INSERT INTO users(user_fname)
-- VALUES ('JOHN'), ('SAM'), ('LARRY'), ('JOSH');

-- CREATE TABLE orders(
-- order_id SERIAL PRIMARY KEY,
-- order_date DATE NOT NULL,
-- ref_user_id INTEGER REFERENCES users(user_id) ON DELETE SET NULL
-- );

-- CREATE TABLE items(
-- 	item_id SERIAL PRIMARY KEY,
-- 	item_name VARCHAR(20),
-- 	price INTEGER NOT NULL,
-- 	ref_order_id INTEGER REFERENCES orders(order_id) ON DELETE SET NULL 
-- );

-- INSERT INTO orders(order_date, ref_user_id)
-- VALUES ('2010-04-05', (SELECT user_id FROM users WHERE user_fname='JOHN')),
--        ('2011-09-02',(SELECT user_id FROM users WHERE user_fname='JOHN')),
-- 	   ('2012-08-02', (SELECT user_id FROM users WHERE user_fname='JOHN')),
-- 	   ('2014-06-03', (SELECT user_id FROM users WHERE user_fname='SAM')),
-- 	   ('2013-03-20', (SELECT user_id FROM users WHERE user_fname='SAM')),
-- 	   ('2020-10-09', (SELECT user_id FROM users WHERE user_fname='LARRY'));

-- INSERT INTO items(item_name, price, ref_order_id)
-- VALUES ('chair', 30, (SELECT order_id FROM orders WHERE order_date = '2010-04-05')),
-- ('table', 40, (SELECT order_id FROM orders WHERE order_date = '2010-04-05')),
--  ('carpet', 50, (SELECT order_id FROM orders WHERE order_date = '2010-04-05')),
--  ('curtains', 100, (SELECT order_id FROM orders WHERE order_date = '2011-09-02')),
--  ('lamp', 200, (SELECT order_id FROM orders WHERE order_date = '2012-08-02')),
--  ('couch', 500, (SELECT order_id FROM orders WHERE order_date = '2012-08-02'));


-- CREATE OR REPLACE FUNCTION total_user_price (user_name VARCHAR(20))
-- RETURNS INTEGER
-- LANGUAGE plpgsql
-- AS
-- $$
-- DECLARE
-- total_price INTEGER;
-- BEGIN
-- SELECT sum(items.price)
-- FROM items
-- INNER JOIN orders
-- ON items.ref_order_id=orders.order_id
-- INNER JOIN users
-- ON orders.ref_user_id=users.user_id
-- WHERE user_name=user_fname
-- INTO total_price;
-- RETURN total_price;
-- END;
-- $$

-- INSERT INTO items (item_name, price, ref_order_id)
-- VALUES ('bed', 600, (SELECT order_id FROM orders WHERE order_date='2013-03-20')),
-- ('oven', 150, (SELECT order_id FROM orders WHERE order_date='2020-10-09'));

-- SELECT total_user_price ('JOHN');
-- SELECT total_user_price ('SAM');
-- SELECT total_user_price ('LARRY');















