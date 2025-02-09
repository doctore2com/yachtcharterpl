CREATE DATABASE IF NOT EXISTS yacht_charter;
USE yacht_charter;

-- Tworzenie tabel
CREATE TABLE IF NOT EXISTS users (
                                     id BIGINT AUTO_INCREMENT PRIMARY KEY,
                                     username VARCHAR(255) NOT NULL,
                                     email VARCHAR(255) NOT NULL,
                                     password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS roles (
                                     id BIGINT AUTO_INCREMENT PRIMARY KEY,
                                     name VARCHAR(20)
);

CREATE TABLE IF NOT EXISTS user_roles (
                                          user_id BIGINT,
                                          role_id BIGINT,
                                          PRIMARY KEY (user_id, role_id),
                                          FOREIGN KEY (user_id) REFERENCES users(id),
                                          FOREIGN KEY (role_id) REFERENCES roles(id)
);

CREATE TABLE IF NOT EXISTS boats (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    boat_name VARCHAR(255) NOT NULL,
    description TEXT,
    opinions TEXT,
    landlord VARCHAR(255),
    manufacturer VARCHAR(255),
    image_source VARCHAR(255),
    places_inside INT,
    cabins INT,
    bunk INT,
    price_in_the_season DECIMAL(10,2),
    price_out_of_season DECIMAL(10,2),
    year INT,
    power INT,
    distance INT
);

CREATE TABLE IF NOT EXISTS charter (
                                       id BIGINT AUTO_INCREMENT PRIMARY KEY,
                                       user_id BIGINT,
                                       boat_id BIGINT,
                                       charter_name VARCHAR(255),
                                       description TEXT,
                                       start_charter DATETIME,
                                       end_charter DATETIME,
                                       port VARCHAR(255),
                                       FOREIGN KEY (boat_id) REFERENCES boats(id),
                                       FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Czyszczenie tabel
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE charter;
TRUNCATE TABLE boats;
TRUNCATE TABLE user_roles;
TRUNCATE TABLE roles;
TRUNCATE TABLE users;
SET FOREIGN_KEY_CHECKS = 1;

INSERT INTO roles(id, name) VALUES(1, 'ROLE_USER');
INSERT INTO roles(id, name) VALUES(2, 'ROLE_MODERATOR');
INSERT INTO roles(id, name) VALUES(3, 'ROLE_ADMIN');
INSERT INTO roles(id, name) VALUES(4, 'ROLE_SAILOR');

-- Dodawanie użytkowników
INSERT INTO users (id, username, email, password) VALUES
                                                      (1, 'user1', 'user1@example.com', 'user1'),
                                                      (2, 'admin', 'admin@example.com', 'admin123'),
                                                      (3, 'sailor1', 'sailor1@example.com', 'sailor123'),
                                                      (4, 'mod1', 'mod1@example.com', 'mod123');

-- Przypisanie ról użytkownikom
INSERT INTO user_roles(user_id, role_id) VALUES(1, 1);  -- user -> ROLE_USER
INSERT INTO user_roles(user_id, role_id) VALUES(2, 3);  -- admin -> ROLE_ADMIN
INSERT INTO user_roles(user_id, role_id) VALUES(3, 4);  -- sailor1 -> ROLE_SAILOR
INSERT INTO user_roles(user_id, role_id) VALUES(4, 2);  -- mod1 -> ROLE_MODERATOR


-- Przykładowe łodzie
INSERT INTO boats (boat_name, description, opinions, landlord, manufacturer, image_source, places_inside, cabins, bunk, price_in_the_season, price_out_of_season, year, power, distance) VALUES
('Antila 24', 'Komfortowy jacht dla rodziny', 'Świetna łódź, polecam!', 'Jan Kowalski', 'Antila Yachts', '/assets/sasanka.jpg', 6, 2, 6, 350, 250, 2020, 10, 500),
('Tango 780 Sport', 'Sportowy jacht weekendowy', 'Idealna na krótkie rejsy', 'Anna Nowak', 'Tango Yachts', '/assets/sasanka.jpg', 4, 1, 4, 300, 200, 2019, 15, 400),
('Phobos 25', 'Przestronny jacht turystyczny', 'Bardzo stabilna jednostka', 'Piotr Wiśniewski', 'Phobos Yachts', '/assets/sasanka.jpg', 7, 2, 7, 400, 300, 2021, 8, 600),
('Maxus 26', 'Luksusowy jacht rodzinny', 'Komfortowe wnętrze', 'Marek Zieliński', 'Maxus Yachts', '/assets/sasanka.jpg', 8, 3, 8, 450, 350, 2022, 12, 700);