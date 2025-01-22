CREATE DATABASE IF NOT EXISTS yacht_charter;
USE yacht_charter;

-- Tworzenie tabel
CREATE TABLE IF NOT EXISTS boat (
                                    id BIGINT AUTO_INCREMENT PRIMARY KEY,
                                    boat_name VARCHAR(255),
    description TEXT,
    opinions TEXT,
    landlord VARCHAR(255),
    manufacturer VARCHAR(255),
    image_source VARCHAR(255),
    places_inside INT,
    cabins INT,
    bunk INT,
    price_in_the_season INT,
    price_out_of_season INT,
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
    FOREIGN KEY (boat_id) REFERENCES boat(id)
    );

-- Czyszczenie tabel (teraz już istniejących)
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE charter;
TRUNCATE TABLE boat;
SET FOREIGN_KEY_CHECKS = 1;

-- Przykładowe łodzie
INSERT INTO boat (boat_name, description, opinions, landlord, manufacturer, image_source, places_inside, cabins, bunk, price_in_the_season, price_out_of_season, year, power, distance) VALUES
                                                                                                                                                                                            ('Antila 24', 'Komfortowy jacht dla rodziny', 'Świetna łódź, polecam!', 'Jan Kowalski', 'Antila Yachts', '/assets/sasanka.jpg', 6, 2, 6, 350, 250, 2020, 10, 500),
                                                                                                                                                                                            ('Tango 780 Sport', 'Sportowy jacht weekendowy', 'Idealna na krótkie rejsy', 'Anna Nowak', 'Tango Yachts', '/assets/sasanka.jpg', 4, 1, 4, 300, 200, 2019, 15, 400),
                                                                                                                                                                                            ('Phobos 25', 'Przestronny jacht turystyczny', 'Bardzo stabilna jednostka', 'Piotr Wiśniewski', 'Phobos Yachts', '/assets/sasanka.jpg', 7, 2, 7, 400, 300, 2021, 8, 600),
                                                                                                                                                                                            ('Maxus 26', 'Luksusowy jacht rodzinny', 'Komfortowe wnętrze', 'Marek Zieliński', 'Maxus Yachts', '/assets/sasanka.jpg', 8, 3, 8, 450, 350, 2022, 12, 700);

-- Tutaj możesz dodać więcej instrukcji SQL do inicjalizacji tabel, danych itp.
-- Na przykład:
-- CREATE TABLE boats (...);
-- INSERT INTO boats VALUES (...);