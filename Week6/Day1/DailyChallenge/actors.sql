-- CREATE TABLE actors(
-- actor_id SERIAL PRIMARY KEY,
-- first_name VARCHAR (20) NOT NULL,
-- last_name VARCHAR (25) NOT NULL,
-- date_birth DATE NOT NULL,
-- number_oscars SMALLINT NOT NULL
-- -- )

-- INSERT INTO actors (first_name, last_name, date_birth, number_oscars) values ('Jennifer', 'Aniston', '1970-09-09', 5);
-- INSERT INTO actors(first_name, last_name, date_birth, number_oscars) values ('Monica', 'Belucci', '1960-02-02', 3);
-- INSERT INTO actors (first_name, last_name, date_birth, number_oscars) values ('George', 'Clooney', '1998--08-09',6 ), ('Brad', 'Pitt', '1940-09-09', 05);




-- SELECT * FROM actors WHERE actor_id <=4 ORDER BY last_name DESC; 
-- SELECT * FROM actors WHERE last_name LIKE '%e%';
-- SELECT * FROM actors WHERE number_oscars>=6;
SELECT count(*) AS exact_count FROM actors;

