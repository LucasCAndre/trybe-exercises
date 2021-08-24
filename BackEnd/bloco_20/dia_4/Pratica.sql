-- INSERT INTO sakila.staff (first_name, last_name, address_id, store_id, active, username) VALUES 
-- ('Lucas','Obrart', 7, 1, 1, 'Lukita'),
-- ('Carlos','Ventura', 6, 1, 1, 'Calin');

-- INSERT INTO sakila.actor (first_name,last_name)
-- SELECT first_name,last_name 
-- FROM sakila.customer 
-- LIMIT 5;

-- INSERT INTO sakila.category (name) VALUES
-- ('Romance'),
-- ('Magic'),
-- ('Thriller');

-- INSERT INTO sakila.store (manager_staff_id, address_id) VALUES
-- (3, 3);

-- UPDATE sakila.actor
-- SET first_name = 'JULES'
-- WHERE first_name = 'JULIA';

-- UPDATE sakila.category
-- SET name = 'Science Fiction'
-- WHERE name = 'Sci-Fi';

-- UPDATE sakila.film
-- SET rental_rate = 25
-- WHERE length > 100 AND rating IN ('G', 'PG', 'PG-13') AND replacement_cost > 20;

-- UPDATE sakila.film
-- SET rental_rate = 10
-- WHERE length BETWEEN 0 AND 100;

-- UPDATE sakila.film
-- SET rental_rate = 20
-- WHERE length > 100;

-- DELETE FROM sakila.film_actor
-- WHERE actor_id = 7;

-- DELETE FROM sakila.actor
-- WHERE first_name = 'GRACE';

-- DELETE FROM sakila.film_actor
-- WHERE actor_id = 12;

-- DELETE FROM sakila.actor
-- WHERE first_name = 'KARL';

-- DELETE FROM sakila.film_actor
-- WHERE actor_id IN (8,103,181);

-- DELETE FROM sakila.actor
-- WHERE first_name = 'MATTHEW';

-- DELETE FROM sakila.film_text
-- WHERE description LIKE '%saga%';

-- TRUNCATE sakila.film_actor;

-- TRUNCATE sakila.film_category;
