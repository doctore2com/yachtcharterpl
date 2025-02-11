**YachtCharterPl**

**System wykonany w ramach pracy inżynierskiej.**
 
Temat: System webowy wspomagający rezerwację jachtów.

Stan na: 09.02.2025

**Struktura**

**System składa się z następujących warstw:**

**Frontend:**

Technologie: HTML5, CSS3, JavaScript (AngularJS).
Responsywność: Dostosowanie aplikacji do różnych urządzeń. 
Interaktywność: Komponenty UI, formularze.


**Backend:**

Technologie: framework Spring Boot, Java.

Autoryzacja i uwierzytelnianie: format JSON, standard Oauth.

**Baza danych:**
Relacyjna baza danych MySQL, w której zaprojektowano tabele:

Tabele użytkowników (użytkownicy – klienci, armatorzy, administrator).
Tabele z ofertami jachtów (informacje o jachcie, lokalizacja, ceny).
Tabele z rezerwacjami – czarterami (informacje o wynajmie).

**Kwestia bezpieczeństwa:**
Bezpieczne przechowywanie haseł: hashowanie haseł.

**Wdrożenie aplikacji:**
CI/CD: wykorzystanie repozytorium kodu na GitHub.

**Konteneryzacja: Docker.**

**Testowanie:**
Testowanie REST API przy użyciu narzędzia Postman (kolekcja testów w katalogu yachtcharterpl\app\testy.postman_collection)





**Opis systemu**

Wszystkie strony są responsywne i wyświetlają się poprawnie na urządzeniach mobilnych.



**Wyszukiwanie jachtów**

Użytkownicy mogą wyszukiwać jachty na podstawie dostępnych filtrów:
- Liczba miejsc na pokładzie, liczba kabin: Wybór wielkości jachtu w odniesieniu do potrzeb
- Rok produkcji jachtu
- Cena w sezonie


Po wybraniu odpowiednich filtrów użytkownik otrzymuje listę jachtów spełniających kryteria. Każdy jacht posiada krótki opis w postaci: nazwy jednostki, opisu, liczby miejsc na pokładzie, ceny za wynajem. Na rysunku przedstawiono wygląd listy jachtów wraz z filtrami.

![image](https://github.com/user-attachments/assets/d8a42122-240d-4586-87ca-35fa27b1dde7)



**Przeglądanie szczegółów jachtu**

Użytkownik przechodząc na kartę danej jednostki otrzymuje następujące informacje takie jak: zdjęcie jednostki, nazwa, krótki opis, liczba łóżek, liczba kabin, maksymalny dystans do przepłynięciu na silniku (zależne od pojemności baku na paliwo), producent jednostki, nazwa armatora, opinie, liczba miejsc na pokładzie, moc silnika (mierzona w koniach mechanicznych), cena za jeden dzień w sezonie wysokim, cena za jeden dzień w sezonie niskim, rok produkcji jednostki. Na Rysunku przedstawiono dane szczegółowe jachtu. 

![image](https://github.com/user-attachments/assets/82f7be33-27f5-4d36-b08e-4d685de1aff7)

 

**Potwierdzenie rezerwacji**

W przypadku, gdy użytkownik chce potwierdzić rezerwację,  zostaje przeniesiony na osobną kartę, gdzie zostanie wyświetlony formularz rezerwacji (Rysunek 4.5). Dane wyświetlane w potwierdzeniu rezerwacji to nazwa rezerwacji, opis, data rozpoczęcia, data zakończenia oraz port. 


	
Ostatnim etapem procesu rezerwacyjnego jest potwierdzenie rezerwacji poprzez naciśnięcie przycisku Zarezerwuj.
Jeśli użytkownik rozmyśli się w odniesieniu do danego jachtu, może nacisnąć przycisk Anuluj na formularzu. W ten sposób jacht ponownie będzie możliwy do wynajmu w danym okresie. 
Po prawidłowej rezerwacji jachtu na dany okres wyświetli się informacja o rezerwacji, a tym samym rezerwacja będzie dostępna w karcie Lista rezerwacji w górnym menu. Listę rezerwacji została udostępniona na Rysunku 

![image](https://github.com/user-attachments/assets/dcb4f4ef-ce59-446a-8ac5-b0248c12de8a)


**Dodawanie jachtu do bazy ofert**

Użytkownik (armator lub administrator) posiada możliwość dodania nowej oferty do bazy danych. Aby dodać taką ofertę użytkownik naciska przycisk Dodaj jacht w górnym menu, a następnie uzupełnia wszystkie pola dostępne dla jednostki: nazwa, krótki opis, liczba łóżek, liczba kabin, maksymalny dystans do przepłynięciu na silniku (zależne od pojemności baku na paliwo), producent jednostki, nazwa armatora, ilość miejsc na pokładzie, moc silnika (mierzona w koniach mechanicznych), cena za jeden dzień w sezonie wysokim, cena za jeden dzień w sezonie niskim, rok produkcji jednostki, dodanie zdjęcia do oferty (domyślnie z katalogu \client\src\assets\). Formularz dodawania nowego jachtu do bazy danych został przedstawiony na Rysunku.

![image](https://github.com/user-attachments/assets/7b5d60a0-8c25-4bb1-815e-4da9f500e082)



**Użytkownicy**

Użytkownicy do testów:


Rola: User Login: user1 Hasło: user1

Rola: Admin Login: admin Hasło: admin123

Rola: Sailor Login: sailor1 Hasło: sailor123

Rola: Moderator Login: mod1 Hasło: mod123



