CREATE DATABASE my_database; 
CREATE USER postgres WITH ENCRYPTED PASSWORD 'postgres'; 
GRANT ALL PRIVILEGES ON DATABASE my_database TO user; 

