YachtCharterPl

System wykonany w ramach pracy in�ynierskiej.

Temat: System webowy wspomagaj�cy rezerwacj� jacht�w.
Stan na: 09.02.2025
Struktura 
System sk�ada si� z nast�puj�cych warstw:
Frontend:
Technologie: HTML5, CSS3, JavaScript (AngularJS).
Responsywno��: Dostosowanie aplikacji do r�nych urz�dze�. 
Interaktywno��: Komponenty UI, formularze.
Backend:
Technologie: framework Spring Boot, Java.
Autoryzacja i uwierzytelnianie: format JSON, standard Oauth.
Baza danych:
Relacyjna baza danych MySQL, w kt�rej zaprojektowano tabele:
Tabele u�ytkownik�w (u�ytkownicy � klienci, armatorzy, administrator).
Tabele z ofertami jacht�w (informacje o jachcie, lokalizacja, ceny).
Tabele z rezerwacjami � czarterami (informacje o wynajmie).
Kwestia bezpiecze�stwa:
Bezpieczne przechowywanie hase�: hashowanie hase�.
Wdro�enie aplikacji:
CI/CD: wykorzystanie repozytorium kodu na GitHub.
Konteneryzacja: Docker.
Testowanie:
Testowanie REST API przy u�yciu narz�dzia Postman (kolekcja test�w w katalogu yachtcharterpl\app\testy.postman_collection)
Opis systemu
Wszystkie strony s� responsywne i wy�wietlaj� si� poprawnie na urz�dzeniach mobilnych.

Wyszukiwanie jacht�w

U�ytkownicy mog� wyszukiwa� jachty na podstawie dost�pnych filtr�w:
Liczba miejsc na pok�adzie, liczba kabin: Wyb�r wielko�ci jachtu w odniesieniu do potrzeb
Rok produkcji jachtu
Cena w sezonie
    Po wybraniu odpowiednich filtr�w u�ytkownik otrzymuje list� jacht�w spe�niaj�cych kryteria. Ka�dy jacht posiada kr�tki opis w postaci: nazwy jednostki, opisu, liczby miejsc na pok�adzie, ceny za wynajem. Na rysunku 4.3 przedstawiono wygl�d listy jacht�w wraz z�filtrami.

Przegl�danie szczeg��w jachtu

	U�ytkownik przechodz�c na kart� danej jednostki otrzymuje nast�puj�ce informacje takie jak: zdj�cie jednostki, nazwa, kr�tki opis, liczba ��ek, liczba kabin, maksymalny dystans do przep�yni�ciu na silniku (zale�ne od pojemno�ci baku na paliwo), producent jednostki, nazwa armatora, opinie, liczba miejsc na pok�adzie, moc silnika (mierzona w�koniach mechanicznych), cena za jeden dzie� w sezonie wysokim, cena za jeden dzie� w�sezonie niskim, rok produkcji jednostki. Na Rysunku 4.4 przedstawiono dane szczeg�owe jachtu. 
 

Potwierdzenie rezerwacji

	W przypadku, gdy u�ytkownik chce potwierdzi� rezerwacj�,  zostaje przeniesiony na osobn� kart�, gdzie zostanie wy�wietlony formularz rezerwacji (Rysunek 4.5). Dane wy�wietlane w potwierdzeniu rezerwacji to nazwa rezerwacji, opis, data rozpocz�cia, data zako�czenia oraz port. 


	
	Ostatnim etapem procesu rezerwacyjnego jest potwierdzenie rezerwacji poprzez naci�ni�cie przycisku Zarezerwuj.
	Je�li u�ytkownik rozmy�li si� w odniesieniu do danego jachtu, mo�e nacisn�� przycisk Anuluj na formularzu. W ten spos�b jacht ponownie b�dzie mo�liwy do wynajmu w�danym okresie. 
	Po prawid�owej rezerwacji jachtu na dany okres wy�wietli si� informacja o rezerwacji, a tym samym rezerwacja b�dzie dost�pna w karcie Lista rezerwacji w g�rnym menu. List� rezerwacji zosta�a udost�pniona na rysunku 4.6.


Dodawanie jachtu do bazy ofert

	U�ytkownik (armator lub administrator) posiada mo�liwo�� dodania nowej oferty do bazy danych. Aby doda� tak� ofert� u�ytkownik naciska przycisk Dodaj jacht w g�rnym menu, a nast�pnie uzupe�nia wszystkie pola dost�pne dla jednostki: nazwa, kr�tki opis, liczba ��ek, liczba kabin, maksymalny dystans do przep�yni�ciu na silniku (zale�ne od pojemno�ci baku na paliwo), producent jednostki, nazwa armatora, ilo�� miejsc na pok�adzie, moc silnika (mierzona w koniach mechanicznych), cena za jeden dzie� w sezonie wysokim, cena za jeden dzie� w sezonie niskim, rok produkcji jednostki, dodanie zdj�cia do oferty (domy�lnie z katalogu \client\src\assets\). Formularz dodawania nowego jachtu do bazy danych zosta� przedstawiony na Rysunku 4.7.

U�ytkownicy
U�ytkownicy do test�w:

Rola: User Login: user1 Has�o: user1
Rola: Admin Login: admin Has�o: admin123
Rola: Sailor Login: sailor1 Has�o: sailor123
Rola: Moderator Login: mode1 Has�o: mod123



