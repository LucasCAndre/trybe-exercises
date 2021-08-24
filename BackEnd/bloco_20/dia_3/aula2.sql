SELECT CONCAT(first_name, ' ', last_name) FROM sakila.customer
WHERE active IS false AND store_id = 2 AND first_name <> 'KENNETH'
ORDER BY first_name;

SELECT * FROM sakila.film;

SELECT title, description, release_year, replacement_cost FROM sakila.film
WHERE (rating = 'G' OR rating = 'PG' OR rating = 'PG-13') AND replacement_cost >= 18
ORDER BY replacement_cost DESC, title LIMIT 100;

SELECT COUNT(*) from sakila.customer
WHERE store_id = 1 AND active IS true;

SELECT * FROM sakila.customer
WHERE store_id = 1 AND active IS NOT true;

SELECT * FROM sakila.film
WHERE rating = 'NC-17'
ORDER BY rental_rate, title
LIMIT 50;