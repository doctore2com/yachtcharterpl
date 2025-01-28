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
    FOREIGN KEY (boat_id) REFERENCES boat(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
    );

# CREATE TABLE IF NOT EXISTS users (
#     id BIGINT AUTO_INCREMENT PRIMARY KEY,
#     email VARCHAR(255),
#     password VARCHAR(255),
#     username VARCHAR(255)
#     );

-- Czyszczenie tabel (teraz już istniejących)
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE charter;
TRUNCATE TABLE boat;
# TRUNCATE TABLE users;
SET FOREIGN_KEY_CHECKS = 1;

-- Przykładowe łodzie
INSERT INTO boat (boat_name, description, opinions, landlord, manufacturer, image_source, places_inside, cabins, bunk, price_in_the_season, price_out_of_season, year, power, distance) VALUES


('Antila 24', 'Komfortowy jacht dla rodziny', 'Świetna łódź, polecam!', 'Jan Kowalski', 'Antila Yachts', '/assets/sasanka.jpg', 6, 2, 6, 350, 250, 2020, 10, 500),
('Tango 780 Sport', 'Sportowy jacht weekendowy', 'Idealna na krótkie rejsy', 'Anna Nowak', 'Tango Yachts', '/assets/sasanka.jpg', 4, 1, 4, 300, 200, 2019, 15, 400),
('Phobos 25', 'Przestronny jacht turystyczny', 'Bardzo stabilnaroles jednostka', 'Piotr Wiśniewski', 'Phobos Yachts', '/assets/sasanka.jpg', 7, 2, 7, 400, 300, 2021, 8, 600),
('Maxus 26', 'Luksusowy jacht rodzinny', 'Komfortowe wnętrze', 'Marek Zieliński', 'Maxus Yachts', '/assets/sasanka.jpg', 8, 3, 8, 450, 350, 2022, 12, 700);
# ('Sun Odyssey 410', 'Nowoczesny jacht z przestronnym wnętrzem, idealny do długich rejsów po Morzu Śródziemnym.', 'Bardzo komfortowy, idealny dla rodzin. Świetny do żeglugi po Adriatyku.', 'Adriatic Yachting', 'Jeanneau', 'images/boat1.jpg', 8, 3, 6, 1500, 1200, 2020, 45, 1000),
# ('Lagoon 450', 'Luksusowy katamaran z przestronnymi kabinami, idealny do żeglugi z grupą przyjaciół.', 'Niesamowicie stabilny, przestronny. Idealny na rodzinne wakacje.', 'Luxury Charter', 'Lagoon', 'images/boat2.jpg', 12, 5, 10, 3500, 2800, 2018, 55, 1200),
# ('Bavaria 37 Cruiser', 'Komfortowy jacht dla mniejszych grup, doskonały do żeglugi po Bałtyku.', 'Bardzo stabilny jacht, idealny do rejsów po morzu.', 'Baltic Sails', 'Bavaria Yachts', 'images/boat3.jpg', 6, 2, 4, 1300, 1000, 2016, 40, 800),
# ('Beneteau Oceanis 45', 'Jacht o klasycznym wyglądzie, zapewniający wygodę i luksus podczas długich rejsów.', 'Doskonała przestronność, wspaniałe warunki na pokładzie.', 'Oceanic Yachts', 'Beneteau', 'images/boat4.jpg', 10, 4, 8, 2500, 2000, 2019, 50, 1500),
# ('Jeanneau Merry Fisher 895', 'Sportowy jacht motorowy, idealny na szybkie rejsy i weekendowe wypady.', 'Wspaniała moc silnika, łatwy do manewrowania.', 'SpeedYachts', 'Jeanneau', 'images/boat5.jpg', 6, 2, 4, 2000, 1500, 2022, 80, 500),
# ('Catalina 42', 'Wygodny jacht, idealny na długie rejsy z przyjaciółmi lub rodziną.', 'Świetna przestronność i komfort. Idealny do żeglugi na długie dystanse.', 'Sailing Ventures', 'Catalina Yachts', 'images/boat6.jpg', 8, 3, 6, 1800, 1400, 2015, 50, 1100),
# ('Hunter 31', 'Przystępny cenowo jacht, idealny dla początkujących żeglarzy.', 'Bardzo łatwy w obsłudze, świetny dla małych grup.', 'SimpleCharter', 'Hunter Marine', 'images/boat7.jpg', 4, 2, 4, 900, 700, 2012, 30, 400),
# ('Dufour 360 Grand Large', 'Świetny wybór na rejsy po Morzu Północnym, nowoczesny i komfortowy jacht.', 'Przestronny, łatwy w obsłudze, świetna jakość wykonania.', 'North Sea Charters', 'Dufour Yachts', 'images/boat8.jpg', 8, 3, 6, 2100, 1600, 2020, 40, 1000),
# ('Sea Ray 230 SLX', 'Sportowy jacht motorowy, doskonały do szybkiej żeglugi i wodnych sportów.', 'Szybki, zwrotny, idealny na spędzenie dnia na wodzie.', 'SeaRiders', 'Sea Ray', 'images/boat9.jpg', 4, 1, 2, 1500, 1200, 2021, 250, 350),
# ('Fairline Targa 45', 'Luksusowy jacht motorowy, idealny do rejsów wzdłuż wybrzeża.', 'Elegancki, szybki, doskonały do relaksu.', 'Luxury Boat Charters', 'Fairline', 'images/boat10.jpg', 6, 3, 6, 5000, 4000, 2017, 350, 1200);

# -- Przykładowe czartery jachtów
# INSERT INTO charter (user_id, boat_id, charter_name, description, start_charter, end_charter, port) VALUES
# (1, 1, 'Wynajem na weekend', 'Wynajem jachtu na weekend na wodach Adriatyku. Idealne na relaksujący wypoczynek z przyjaciółmi.', '2025-07-10 15:00:00', '2025-07-12 12:00:00', 'Port w Split, Chorwacja'),
# (1, 2, 'Wakacje na jachcie', 'Długi wynajem jachtu na 7 dni w Grecji. Doskonała okazja do odkrywania wysp i pięknych plaż.', '2025-08-01 09:00:00', '2025-08-08 18:00:00', 'Port w Atenach, Grecja'),
# (1, 3, 'Romantyczny rejs', 'Idealny wynajem jachtu dla pary. Rejs po Bałtyku, w atmosferze spokoju i intymności.', '2025-09-05 18:00:00', '2025-09-07 14:00:00', 'Port w Gdańsku, Polska'),
# (1, 4, 'Zawody regatowe', 'Rezerwacja jachtu do udziału w zawodach regatowych na jeziorze Balaton. Wysokiej klasy jacht przygotowany do wyzwań regatowych.', '2025-06-25 08:00:00', '2025-06-28 18:00:00', 'Port w Balatonfüred, Węgry'),
# (1, 5, 'Rodzinne wakacje', 'Wynajem jachtu na rodzinne wakacje na wodach Włoch. Komfortowe warunki dla rodziny z dziećmi.', '2025-07-15 10:00:00', '2025-07-22 17:00:00', 'Port w Wenecji, Włochy');


# -- Przykładowi użytkownicy
# INSERT INTO users (email, password, username) VALUES
# ('jan.kowalski@email.com', 'hashedpassword123', 'janek_k'),
# ('anna.nowak@email.com', 'securepassword456', 'anna_n'),
# ('michal.szmyd@email.com', 'pass789', 'michal_s'),
# ('karol.kowalski@email.com', 'm4r1n3p4ss', 'karol_k'),
# ('agata.brown@email.com', 'agata1234', 'agata_b');