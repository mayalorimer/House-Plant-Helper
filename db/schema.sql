DROP DATABASE IF EXISTS plantadvice_db;
CREATE DATABASE plantadvice_db;

USE plantadvice_db;

CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(50) NOT NULL,
    username VARCHAR (30) NOT NULL,
    password VARCHAR(30) NOT NULL
);

CREATE TABLE post (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    image BLOB NOT NULL,
    description VARCHAR(3000) NOT NULL,
    user_id INT,
    FOREIGN KEY (user_id)
    REFERENCES user(id)
    ON DELETE SET NULL
);

CREATE TABLE advice (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    advice VARCHAR(3000) NOT NULL,
    user_id INT,
    post_id INT,
    FOREIGN KEY (user_id)
    REFERENCES user(id),
    FOREIGN KEY (post_id)
    REFERENCES post(id)
    ON DELETE SET NULL
);