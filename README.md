
MVN:

mvn dependency:purge-local-repository
mvn dependency:resolve
mvn clean package -Dmaven.test.skip=true
mvn clean install -U  (w app/server)

mvn clean install -DskipTests 
mvn spring-boot:run (w master/yachtcharterpl/app/server)

mvn -version

npm install


DOCKER:
 
docker-compose down
docker-compose up --build
docker-compose up db
docker stop $(docker ps -a -q)
docker-compose
docker volume ls
docker volume rm yacht-charter-mysql-data

docker-compose -f docker-compose.dev.yml up --build  !!!!!

BASH:

netstat -aon | find /i "listening"
tasklist /fi "pid eq 11400"
taskkill /F /PID 11400
net stop mysql80
net start mysql80


MYSQL:

mysql -u root -p

GIT:

git add client
git status
git commit -m "update pom.xml"
git push
git checkout
git pull --rebase
git stash
git switch rafal-branch
git fetch origin
git branch
git rebase -i HEAD~5
git push --force-with-lease
git remote -v
del .git /F /Q


VIM:

\q  wyjscie 

ssh-keygen -t ed25519 -C "milanoitaliana@gmail.com"


07.11.2024
1. Zatrzymanie mysql
2. Uruchomienie DockerDesktop 

16.11.2024
1. Skonfigurować po SSH  VVVVV
2. Sklonować repo VVVVV
3. Uporządkować notatnik - README i puschować na repo VVVVV

19.11.2024
1. Zarchiwizować pozostałe niewykorzystane repo na GIT

23.11.2024

1. Dodać klucz prywatny do gitignore i do knonwhost   VVVV Dodałem do gitignore, ale nie do known-host
2. Rebuild działający VVVVV Restart IDE pomógł 
3. Uzupełnić zapytania do charters w odniesieniu do boats   VVVVV
4. Poprawić endpointy wg nomenklatury poniżej dla charters i innych   VVVVV
5. Sprawdzić pozostałe zapytania postman, tak aby zwracały status 200 (m.in. dodać crossorigin tak jak w boatcontroller.  VVVVV
6. 

GET /boats         - pobierz wszystkie łódki
GET /boats/{id}    - pobierz konkretną łódkę
POST /boats        - dodaj nową łódkę
PUT /boats/{id}    - aktualizuj łódkę
DELETE /boats/{id} - usuń łódkę

26.11.2024 

1. Live Coding na Visual Studio Code (ext. live share)
2. Pozmieniać zapytania na Postman w odniesieniu do AddCharter
3. Dodać do klasy User relacje ManyToOne do charteru VVVVV
4. Rozpisać relacje między klasami (entities) -> wtyczka, która generuje wizualnie zależności (boats, charters, users)

CRUD dla charteru (dodawanie rezerwacji
CRUD dla łodzi (dodawanie, wyświetlanie, edycja, usuwanie).



@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss",timezone = "Europe/Warsaw")
    @Column(name="start_charter")
	
30.11.2024

1. Live Coding na Visual Studio Code (ext. live share)  VVVVV
2. Pozmieniać zapytania na Postman w odniesieniu do AddCharter VVVVVV
3. Rozpisać relacje między klasami (entities) -> wtyczka, która generuje wizualnie zależności (boats, charters, users)

03.12.2024

1. Visual Studio Code działające  VVVVV

7.12.2024

1. Zdefiniować model w .ts dla każdego obiektu z backendu  VVVVV
2. boat.service.ts - sprawdzić ściezki do backendu czy się zgadzają w odniesieniu do |Postmana ( z jakiegoś powodu TS nie pobiera danych z 8080) VVVVV

chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security 

ng g c charter-form

10.12.2024

1. Przygotować listę łódek (boat-list), aby się poprawnie wyświetlały z potrzebnymi minimalnymi danymi (w postaci tabeli, jakieś krawędzie, z przyciskiem WYBIERZ)  VVVVV
2. Wyświetlić daną łódkę (boat-details), aby wyświetlało tylko jeden obiekt z danymi szczegółowymi i przyciskiem zarezerwuj. VVVVV
3. Spróbować dokończyć charter-form, aby pobrał po boat.id dane łódki z przyciskiem WYCZARTERUJ.


21.12.2024

Książka 

1. BPMN, UML, Diagram sekwencji (relacje miedzy klasami, relacje w bazie)
2. Tematyka jachtów (opisać funkcjonalności z poziomu kontekstu biznesowego)
3. JPA (opisać co nam daje)

Do zrobienia: 

Backend

1. Zwracanie obiektów zamiast void
2. Testowanie - postman (nie było potrzeby robić testów jednostkowych, robiłem testy manualne w postmanie)
3. Kolekcje (w Postmanie opracować odpowiednio na projekt yacht)

22.12.2024

1. Ports are not available: exposing port TCP 0.0.0.0:8080 -> 0.0.0.0:0: listen tcp 0.0.0.0:8080: bind: Tylko jedno użycie każdego adresu gniazda (protokół/adres sieciowy/port) jest normalnie dozwolone


28.12.2024

1. Uruchamiać przez komende w cmd docker-compose -f docker-compose.dev.yml up --build (na razie bez uruchomienia poprzez docker-desktop)


04.01.2024

1. Boat-edit component i Boat-add component dodać brakujące pola z bazy danych  VVVVV
2. Rozwiązać błędy po commicie z frontendu VVVV
3. Podpiąć pod boat-list bootstrapa

07.01.2024

1. Podpiąć pod boat-list bootstrapa 
2. Dokończyć #TODO  VVVVV
3. Poprawić jeden błąd VVVVV

11.01.2025

1. Usunąć targer folder  VVVVV
2. mvn clean install   VVVVV
3. build VVVVV
4. sprawdzić błędy VVVVV

17.01.2025

1. Dokończyć #TODO w odniesieniu do Boat-Add

20.01.2025

1. mvc mikroserwisowo, REST API, SPA

Backend komunikacja przez api (mvc z repo plus baza danych)  VVVVV
Frontend SPA  VVVVV


wzięte z DDD (domain driven desaing). wprowadzenie warstwy abstrakcji na bazie danych. baza dnaych moze zmieniać się wraz z rozwojem potrzeb po stronie logiki biznesowej.

MySQL Bench pobrać
 

2. do instrukcji Docker compose up (ksiązka)

3. Pobierz Docker desktop i Docker compose (dodać do instrukcji przy pobieraniu).


Pliki inicjalizujące do bazy danych (Copy/Paste)  - gdzieś to dodać do książki
Mockup użytkownika (makiety użytkownika) - to także dodać do ksiązki
