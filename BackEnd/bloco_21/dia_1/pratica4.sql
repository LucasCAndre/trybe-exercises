SELECT IF (15 MOD 2 = 0, 'Par', 'Ímpar') AS 'Par ou Impar';
SELECT 220 DIV 12;
SELECT 220 MOD 12;
SELECT (POW(8, 1/3));
SELECT SQRT(4);
SELECT (15 + (RAND()*5));
SELECT CEIL(85.234);
SELECT ROUND(15.7515971, 5);
SELECT FLOOR(39.494);
SELECT CEIL(85.234);
SELECT current_date();
SELECT NOW();
SELECT year(last_update) FROM sakila.actor;
SELECT DATEDIFF('2030-01-20' , now());
SELECT (HOUR('10:25:45') - HOUR('11:00:00'));
SELECT AVG(length) AS 'Média de Duração' FROM sakila.film;
SELECT MIN(length) AS 'Duração Minima' FROM sakila.film;
SELECT MAX(length) AS 'Duração Maxima' FROM sakila.film;
SELECT SUM(length) AS  'Tempo de Exibição Total' FROM sakila.film;
SELECT COUNT(*) AS 'Filmes Registrados' FROM sakila.film;
