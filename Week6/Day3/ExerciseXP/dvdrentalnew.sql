-- In the dvdrental database write a query to select all the columns from the “customer” table.
-- -- SELECT * FROM customer;
-- Write a query to display the names (first_name, last_name) using an alias named “full_name”.
-- -- SELECT (first_name, last_name) AS full_name FROM customer  ; 
-- Lets get all the dates that accounts were created.
-- Write a query to select all the create_date from the “customer” table (there should be no duplicates).
-- -- SELECT DISTINCT create_date FROM customer;
-- Write a query to get all the customer details from the customer table,
-- it should be displayed in descending order by their first name.
-- -- SELECT * FROM customer ORDER BY first_name;
-- Write a query to get the film ID, title, description,
-- year of release and rental rate in ascending order according to their rental rate.
-- -- -- SELECT film_id, title, description, release_year, rental_rate FROM film ORDER BY rental_rate ASC;
-- Write a query to get the address, and the phone number of all customers living in the Texas district,
-- these details can be found in the “address” table.
-- -- SELECT address, phone FROM address;
-- Write a query to retrieve all movie details where the movie id is either 15 or 150.
-- -- SELECT *FROM film WHERE film_id IN(15, 150);
-- Write a query which should check if your favorite movie exists in the database.
-- Have your query get the film ID, title, description, length and the rental rate, these details can be found in the “film” table.
-- -- SELECT film_id, title, description, length, rental_rate FROM film WHERE title='The Silence of The Lambs'; 
-- No luck finding your movie? Maybe you made a mistake spelling the name.
-- Write a query to get the film ID, title, description, length and the rental rate of all the movies starting with the two first letters of your favorite movie.
-- -- SELECT film_id, title, description, length, rental_rate FROM film WHERE title ILIKE 'si%';
-- Write a query which will find the 10 cheapest movies.
-- -- SELECT amount FROM payment ORDER BY amount ASC LIMIT 10;
-- Not satisfied with the results. Write a query which will find the next 10 cheapest movies.
-- -- SELECT amount FROM payment WHERE amount>0 ORDER BY amount ASC LIMIT 10;
-- Bonus: Try to not use LIMIT.

-- -- SELECT amount FROM payment WHERE payment_id BETWEEN payment_id AND payment_id+10 ORDER BY amount ASC;
-- Write a query which will join the data in the customer table and the payment table.
-- You want to get the amount and the date of every payment made by a customer, ordered by their id (from 1 to…).
-- --  SELECT payment.amount, payment.payment_date 
-- -- FROM payment
-- -- INNER JOIN customer
-- -- ON payment.customer_id = customer.customer_id
-- -- ORDER BY payment_id ASC;

-- You need to check your inventory. Write a query to get all the movies which are not in inventory.
-- -- SELECT film.title
-- -- FROM film
-- -- CROSS JOIN inventory
-- -- WHERE film.film_id NOT IN (
-- -- 	SELECT inventory.film_id) 
-- Write a query to find which city is in which country.
-- -- SELECT city.city, country.country 
-- -- FROM city
-- -- INNER JOIN country
-- -- ON city.country_id=country.country_id;
-- Bonus You want to be able to see how your sellers have been doing?
-- Write a query to get the customer’s id, names (first and last),
-- the amount and the date of payment ordered by the id of the staff member who sold them the dvd.

-- ---D3 EXP-----
-- Exercise 1: DVD Rental
-- Instructions
-- Get a list of all film languages.
-- SELECT name FROM language;
-- Get a list of all films joined with their languages – select the following details :
-- film title, description, and language name. Try your query with different joins:
-- -- SELECT film.title, film.description, language.name AS lang
-- -- FROM film
-- -- INNER JOIN language
-- -- ON film.language_id=language.language_id;
-- Get all films, even if they don’t have languages.
-- -- SELECT film.title, film.description, language.name AS lang
-- -- FROM film 
-- -- LEFT JOIN language
-- -- ON film.language_id=language.language_id;
-- Get all languages, even if there are no films in those languages.
-- -- SELECT film.title, film.description, language.name AS lang
-- -- FROM film
-- -- RIGHT JOIN language
-- -- ON film.language_id=language.language_id;

-- Create a new table called new_film with the following columns : id, name. Add some new films to the table.
-- -- CREATE TABLE new_film(
-- -- film_id SERIAL PRIMARY KEY,
-- -- film_name VARCHAR(50) NOT NULL 
-- -- );
-- -- INSERT INTO new_film (film_name)
-- -- VALUES ('the great spiderman'), ('the father'), ('sex and the city'), ('dumb and dumber'), ('scream');
-- -- SELECT * FROM new_film;

-- Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, it’s review should be automatically deleted.
-- It should have the following columns:
-- review_id – a primary key, non null, auto-increment.
-- film_id – references the new_film table. The film that is being reviewed.
-- language_id – references the language table. What language the review is in.
-- title – the title of the review.
-- score – the rating of the review (1-10).
-- review_text – the text of the review. No limit on the length.
-- last_update – when the review was last updated.
-- -- CREATE TABLE customer_review(
-- -- review_id SERIAL PRIMARY KEY NOT NULL,
-- -- film_id INTEGER REFERENCES new_film(film_id) ON DELETE CASCADE,
-- -- language_id INTEGER REFERENCES language(language_id) ON DELETE CASCADE,
-- -- title VARCHAR(50) NOT NULL,
-- -- score SMALLINT NOT NULL,
-- -- review_text TEXT NOT NULL,
-- -- last_update DATE NOT NULL
-- -- );

-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
-- -- INSERT INTO customer_review(
-- -- film_id, language_id, title, score, review_text, last_update
-- -- )
-- -- VALUES
-- -- (
-- -- 	(SELECT film_id FROM new_film WHERE film_name='the great spiderman'),
-- -- 	(SELECT language_id FROM language WHERE name='English'),
-- -- 	'the (not)so great Spiderman', 6, 'If you stop mining it for its self-proclaimed amazing qualities,
-- -- 	and overlook its slow patches,
-- -- 	The Amazing Spider-man is watchable enough', '2022-01-05'
-- -- ),

-- -- (
-- -- 	(SELECT film_id FROM new_film WHERE film_name='the father'),
-- -- 	(SELECT language_id FROM language WHERE name='Italian'),
-- -- 		'one man show', 10, 'Hopkins gives a moving, Oscar-winning turn as a man with dementia
-- -- 	in a film full of intelligent performances, disorienting time slips and powerful theatrical effects',
-- -- '2021-12-25'
-- -- );
-- Delete a film that has a review from the new_film table, what happens to the customer_review table?

-- -- DELETE FROM new_film WHERE film_name='the great spiderman';
-- -- SELECT * FROM customer_review;
-- -- SELECT * FROM new_film;


-- EXE 2
-- -- SELECT title FROM film;
-- -- 1.Use UPDATE to change the language of some films. Make sure that you use valid languages.

-- -- UPDATE film 
-- -- SET language_id=(SELECT language_id FROM language WHERE name='Italian')
-- -- WHERE title ='Boulevard Mob'
-- -- RETURNING *;

-- -- SELECT film.title, language.name 
-- -- FROM film
-- -- INNER JOIN language
-- -- ON film.language_id=language.language_id
-- -- WHERE film.title='Boulevard Mob';

-- 2.Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?

-- 3.We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
-- -- DROP TABLE customer_review;
-- 4.Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
-- SELECT COUNT(*) 
-- FROM inventory
-- LEFT JOIN rental
-- ON inventory.inventory_id = rental.inventory_id
-- WHERE inventory.inventory_id NOT IN (SELECT inventory_id FROM rental);
-- GROUP BY inventory.inventory_id, rental.inventory_id;
-- ORDER BY invCount ASC;
-- WHERE inventory_id NOT IN (SELECT inventory_id FROM rental)
-- GROUP BY inventory_id;
-- SELECT COUNT(*)
-- FROM rental;

-- 5.Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
-- -- SELECT title, rental_rate
-- -- FROM film
-- -- INNER JOIN inventory
-- -- ON film.film_id=inventory.film_id
-- -- WHERE inventory_id IN (SELECT inventory_id FROM rental)
-- -- ORDER BY film.rental_rate DESC LIMIT 30;
-- 6.Your friend is at the store, and decides to rent a movie.
-- He knows he wants to see 4 movies, but he can’t remember their names.
-- Can you help him find which movies he wants to rent?
-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
-- -- SELECT film.title, film.description
-- -- FROM film_actor
-- -- INNER JOIN film
-- -- ON film.film_id = film_actor.film_id
-- -- INNER JOIN actor 
-- -- ON actor.actor_id = film_actor.actor_id
-- -- WHERE 
-- -- actor.first_name='Penelope' AND actor.last_name='Monroe' AND film.description ILIKE '%sumo%';
-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.
-- -- SELECT length FROM film;
-- SELECT title, length
-- FROM film
-- WHERE rating='R' AND length<60;
-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, 
-- and he returned it between the 28th of July and the 1st of August, 2005.
-- SELECT title 
-- FROM film
-- INNER JOIN inventory
-- ON film.film_id=inventory.film_id
-- WHERE inventory.inventory_id = (

-- -- SELECT film.title
-- -- FROM rental
-- -- INNER JOIN payment 
-- -- ON payment.rental_id=rental.rental_id
-- -- INNER JOIN customer
-- -- ON rental.customer_id = customer.customer_id
-- -- INNER JOIN inventory
-- -- ON rental.inventory_id=inventory.inventory_id
-- -- INNER JOIN film
-- -- ON inventory.film_id=film.film_id 
-- -- WHERE payment.amount>4.00 AND rental.return_date < '2005-08-01'
-- -- AND rental.return_date > '2005-07-28'
-- -- AND rental.customer_id=(SELECT customer_id FROM customer WHERE last_name='Mahan')
-- -- 	;

-- The 4th film : His friend Matthew Mahan watched this film, as well.
-- It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.


	   
	   
	   
	   