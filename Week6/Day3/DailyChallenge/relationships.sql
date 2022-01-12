-- DC////////
-- Create 2 tables : Customer and Customer profile. They have a One to One relationship. Use all the types of Joins to display the data.
-- Create 2 other tables : Product and Order. Order is a table with a Many to Many relationship with the Customer and Product tables. Use all the types of Joins to display the data.


CREATE TABLE customer (
	customer_id SERIAL PRIMARY KEY,
	username VARCHAR(20)
);

CREATE TABLE profile (
	profile_id SERIAL PRIMARY KEY,
	online BOOLEAN,
	profile_customer_id INTEGER UNIQUE REFERENCES customer (customer_id)
);

INSERT INTO customer (username) VALUES ('John'),('Sarah'),('Tom');
INSERT INTO profile (online,profile_customer_id) VALUES 
(true, (SELECT customer_id FROM customer WHERE username='John')),
(false, (SELECT customer_id FROM customer WHERE username='Tom'));

SELECT username, online
FROM customer
INNER JOIN profile
ON customer_id = profile_customer_id;

SELECT username
FROM customer
INNER JOIN profile
ON customer_id = profile_customer_id
WHERE online=true;

SELECT username AS client
FROM customer
INNER JOIN profile
ON customer_id = profile_customer_id
WHERE online=true;

SELECT COUNT(*) AS nbClientsOnline
FROM customer
INNER JOIN profile
ON customer_id = profile_customer_id
WHERE online=true;

SELECT username, online, profile_id 
FROM customer
LEFT JOIN profile
ON customer_id = profile_customer_id;

INSERT INTO profile (online,profile_customer_id) VALUES 
(false, (SELECT customer_id FROM customer WHERE username='John'));

-- Create 2 other tables : 
-- Product and Order. 
-- Order is a table with a Many to Many relationship 
-- with the Customer and Product tables. 
-- Use all the types of Joins to display the data.

CREATE TABLE product (
	product_id SERIAL PRIMARY KEY,
	name VARCHAR(30) NOT NULL,
	price INTEGER NOT NULL DEFAULT 1
);

CREATE TABLE order_products (
	client_id INTEGER NOT NULL REFERENCES customer (customer_id),
	purchase_id INTEGER NOT NULL REFERENCES product (product_id),
	quantity INTEGER,
	PRIMARY KEY(client_id, purchase_id)
)

INSERT INTO order_products (client_id, purchase_id, quantity) 
VALUES 
((SELECT customer_id FROM customer WHERE username='John'), 
 (SELECT product_id FROM product WHERE name='chair'), 2),
 
((SELECT customer_id FROM customer WHERE username='John'), 
  (SELECT product_id FROM product WHERE name='table'), 3),
  
((SELECT customer_id FROM customer WHERE username='Sarah'), 
 (SELECT product_id FROM product WHERE name='table'), 1)
RETURNING *

INSERT INTO order_products (client_id, purchase_id, quantity) 
VALUES 
((SELECT customer_id FROM customer WHERE username='Tom'), 
 (SELECT product_id FROM product WHERE name='chair'), null)
RETURNING *

SELECT username, product.name, price, quantity
FROM order_products
INNER JOIN customer ON customer_id = client_id
INNER JOIN product ON product_id = purchase_id;

SELECT customer.username, SUM(product.price*order_products.quantity)
FROM order_products
INNER JOIN customer ON customer_id = client_id
INNER JOIN product ON product_id = purchase_id
WHERE customer.username = 'John'
GROUP BY customer.username;