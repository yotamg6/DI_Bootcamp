-- CREATE TABLE city_info (
-- event_datetime TIMESTAMP WITH TIME ZONE NOT NULL,
-- city VARCHAR (20) NOT NULL,
-- temperature DECIMAL NOT NULL,
-- light DECIMAL NOT NULL,
-- airquality_raw DECIMAL NOT NULL,
-- sound DECIMAL NOT NULL,
-- humidity DECIMAL NOT NULL,
-- dust DECIMAL NOT NULL)

-- SELECT count(*) AS exact_count FROM city_info;
-- SELECT temperature FROM city_info WHERE city='Boston' AND event_datetime = '2015-03-01T11:00';
-- SELECT EXTRACT(HOUR from event_datetime) AS hours, EXTRACT(DAY from event_datetime) AS days FROM city_info WHERE temperature>28 AND temperature<30 AND city='San Francisco';

-- 4.Which city was the most noisy (show the name of the city, the date and the noise index)? - Don't use the MAX function
-- SELECT city, event_datetime, sound FROM city_info ORDER BY sound DESC LIMIT 1;
-- 5. Which city was the least noisy (show the name of the city, the date and the noise index)? - Don't use the MIN function
-- SELECT city, event_datetime, sound FROM city_info ORDER BY sound ASC LIMIT 1;
-- 6. Show the dust index of San Francisco on the 26/03/2015 after 20:00.

-- 7. When (ie. days and hours) is the humidity index less that 40 or more than 60 in Geneva?
-- SELECT EXTRACT(HOUR from event_datetime) AS hours, EXTRACT(DAY from event_datetime) AS days FROM city_info WHERE city='Geneva' AND (humidity<40 OR humidity>60);

-- 8. Where and when (Find the day (Sunday-Saturday)) is the light index the highest? - Use an alias for the day of the week.
-- SELECT city, EXTRACT(DOW from event_datetime) AS weekday FROM city_info ORDER BY light DESC LIMIT 1;

-- 9. Select only the info of the cities that start with an "S" (uppercase or lowercase). - Look at the DISTINCT constraint.

-- SELECT * FROM city_info WHERE city LIKE 'S%';

-- 10. Add to the table, todays information in Israel - of this very hour. 
-- (timestamp,city,temperature,light,airquality_raw,sound,humidity,dust)
-- INSERT INTO city_info (event_datetime,city,temperature,light,airquality_raw,sound,humidity,dust) VALUES (current_timestamp, 'Tel Aviv', 14, 0.434, 34.987, 999999, 1928273, 876876);
SELECT * FROM city_info WHERE city='Tel Aviv';
-- - Use the return statement to see what you just inserted: 




