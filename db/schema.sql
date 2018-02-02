DROP DATABASE IF EXISTS burgers_db

-- Creating database

CREATE DATABASE burgers_db;
USE burgers_db;

-- creating table
CREATE TABLE burgers (
    id int AUTO_INCREMENT,
    burger_name VARCHAR (30) NOT NULL,
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY (id)

    
)