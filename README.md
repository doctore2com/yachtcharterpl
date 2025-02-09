YachtCharterPl

System wykonany w ramach pracy in¿ynierskiej.

Temat: System webowy wspomagaj¹cy rezerwacjê jachtów.
Stan na: 09.02.2025
Struktura 
System sk³ada siê z nastêpuj¹cych warstw:
Frontend:
Technologie: HTML5, CSS3, JavaScript (AngularJS).
Responsywnoœæ: Dostosowanie aplikacji do ró¿nych urz¹dzeñ. 
Interaktywnoœæ: Komponenty UI, formularze.
Backend:
Technologie: framework Spring Boot, Java.
Autoryzacja i uwierzytelnianie: format JSON, standard Oauth.
Baza danych:
Relacyjna baza danych MySQL, w której zaprojektowano tabele:
Tabele u¿ytkowników (u¿ytkownicy – klienci, armatorzy, administrator).
Tabele z ofertami jachtów (informacje o jachcie, lokalizacja, ceny).
Tabele z rezerwacjami – czarterami (informacje o wynajmie).
Kwestia bezpieczeñstwa:
Bezpieczne przechowywanie hase³: hashowanie hase³.
Wdro¿enie aplikacji:
CI/CD: wykorzystanie repozytorium kodu na GitHub.
Konteneryzacja: Docker.
Testowanie:
Testowanie REST API przy u¿yciu narzêdzia Postman (kolekcja testów w katalogu yachtcharterpl\app\testy.postman_collection)
Opis systemu
Wszystkie strony s¹ responsywne i wyœwietlaj¹ siê poprawnie na urz¹dzeniach mobilnych.

Wyszukiwanie jachtów

U¿ytkownicy mog¹ wyszukiwaæ jachty na podstawie dostêpnych filtrów:
Liczba miejsc na pok³adzie, liczba kabin: Wybór wielkoœci jachtu w odniesieniu do potrzeb
Rok produkcji jachtu
Cena w sezonie
    Po wybraniu odpowiednich filtrów u¿ytkownik otrzymuje listê jachtów spe³niaj¹cych kryteria. Ka¿dy jacht posiada krótki opis w postaci: nazwy jednostki, opisu, liczby miejsc na pok³adzie, ceny za wynajem. Na rysunku 4.3 przedstawiono wygl¹d listy jachtów wraz z filtrami.

Przegl¹danie szczegó³ów jachtu

	U¿ytkownik przechodz¹c na kartê danej jednostki otrzymuje nastêpuj¹ce informacje takie jak: zdjêcie jednostki, nazwa, krótki opis, liczba ³ó¿ek, liczba kabin, maksymalny dystans do przep³yniêciu na silniku (zale¿ne od pojemnoœci baku na paliwo), producent jednostki, nazwa armatora, opinie, liczba miejsc na pok³adzie, moc silnika (mierzona w koniach mechanicznych), cena za jeden dzieñ w sezonie wysokim, cena za jeden dzieñ w sezonie niskim, rok produkcji jednostki. Na Rysunku 4.4 przedstawiono dane szczegó³owe jachtu. 
 

Potwierdzenie rezerwacji

	W przypadku, gdy u¿ytkownik chce potwierdziæ rezerwacjê,  zostaje przeniesiony na osobn¹ kartê, gdzie zostanie wyœwietlony formularz rezerwacji (Rysunek 4.5). Dane wyœwietlane w potwierdzeniu rezerwacji to nazwa rezerwacji, opis, data rozpoczêcia, data zakoñczenia oraz port. 


	
	Ostatnim etapem procesu rezerwacyjnego jest potwierdzenie rezerwacji poprzez naciœniêcie przycisku Zarezerwuj.
	Jeœli u¿ytkownik rozmyœli siê w odniesieniu do danego jachtu, mo¿e nacisn¹æ przycisk Anuluj na formularzu. W ten sposób jacht ponownie bêdzie mo¿liwy do wynajmu w danym okresie. 
	Po prawid³owej rezerwacji jachtu na dany okres wyœwietli siê informacja o rezerwacji, a tym samym rezerwacja bêdzie dostêpna w karcie Lista rezerwacji w górnym menu. Listê rezerwacji zosta³a udostêpniona na rysunku 4.6.


Dodawanie jachtu do bazy ofert

	U¿ytkownik (armator lub administrator) posiada mo¿liwoœæ dodania nowej oferty do bazy danych. Aby dodaæ tak¹ ofertê u¿ytkownik naciska przycisk Dodaj jacht w górnym menu, a nastêpnie uzupe³nia wszystkie pola dostêpne dla jednostki: nazwa, krótki opis, liczba ³ó¿ek, liczba kabin, maksymalny dystans do przep³yniêciu na silniku (zale¿ne od pojemnoœci baku na paliwo), producent jednostki, nazwa armatora, iloœæ miejsc na pok³adzie, moc silnika (mierzona w koniach mechanicznych), cena za jeden dzieñ w sezonie wysokim, cena za jeden dzieñ w sezonie niskim, rok produkcji jednostki, dodanie zdjêcia do oferty (domyœlnie z katalogu \client\src\assets\). Formularz dodawania nowego jachtu do bazy danych zosta³ przedstawiony na Rysunku 4.7.

U¿ytkownicy
U¿ytkownicy do testów:

Rola: User Login: user1 Has³o: user1
Rola: Admin Login: admin Has³o: admin123
Rola: Sailor Login: sailor1 Has³o: sailor123
Rola: Moderator Login: mode1 Has³o: mod123



