

# Obsługa zdarzeń w JS
![enter image description here](https://chmura.kelek.kartuzy.pl/index.php/s/S4cXnmJKEnQ59Nw/preview)

:clock3:  4 godziny lekcyjne, <br>
:trophy: 45% sprawdzianu z obsługi zdarzeń JS, <br>
:triangular_flag_on_post: Nieprzesłanie kodu do repozytorium jest jednoznaczne z brakiem pracy na lekcji.<br>
:triangular_flag_on_post: Projekty przesłane po ustalonym terminie nie będą brane pod uwagę.<br>
<hr>

### Cechy witryny
- Struktura strony zbudowana za pomocą znaczników sekcji,
 - Zastosowany właściwy standard kodowania polskich znaków,
 - Tytuł strony "Konfigurator",
 - Arkusz stylów w pliku `main.css`,
 - Zawartość strony w pliku `index.html`,
 - Skrypt w pliku `skrypt.js`,
 - Strona zajmuje cały dostępny obszar,
 - Podział strony na blok lewy i prawy,
 - Zawartość i układ strony zgodne z dołączonym zdjęciem.
 ##### Zawartość bloku lewego
 - Nagłówek 1 stopnia: "Konfigurator",
 - Podział na 5 sekcji. Każda sekcja zwiera nagłówek stopnia 4 oraz odpowiednio: 	
	 1. przyciski zmieniające kolor tła strony na kolor podany na przycisku, 
	 2. listę rozwijaną zmieniającą kolor tekstu w prawej części strony, pod zdjęciem (dostępne kolory: white, red, black),
	 3. pole typu numerycznego określającego rozmiar czcionki w `px` dla paragrafu prawej części strony, pod zdjęciem,
	 4. listy jednokrotnego wyboru, określającej styl listy miejsc do odwiedzenia,
	 5. pola, którego zaznaczenie powoduje podkreślenie nagłówka listy miejsc do odwiedzenia.
##### Zawartość bloku prawego
- Podział na dwie sekcje (górną i dolną),
- Górna część składa się z:
	- zdjęcia (`photo.jpg`),
	- nagłówka stopnia 2 oraz nieuporządkowanej listy .
- Dolna część zawiera paragraf z tekstem.

### Styl CSS
:triangular_flag_on_post: Specyfikację podano dla parametru box-sizing: border-box.<br>

- strona zajmuje cały dostępny obszar,
- kolor tła zależny od wybranej opcji, domyślnie biały,
- blok lewy: szerokość 30%, margines wewnętrzny 3%,
- blok prawy: szerokość: 70%,
	- blok górny: 60% wysokości okna przeglądarki,
		- blok zdjęcia: 50%szerokości,
			- zdjęcie: 60% szerokości, wyśrodkowane w pionie i poziomie,
		- lista: 50% szerokości, margines wewnętrzny 5%, 
			- punktor: w zależności od wybranej opcji, domyślnie okręgi,
	- blok dolny: 90% szerokości, margines wewnętrzny 3%, 40% wysokości okna przeglądarki.
		- kolor tekstu zależny od wybranej opcji, domyślnie czarny,
		- rozmiar czcionki zależny od wpisanej wartości,
		- blok posiada pionowy pasek przewijania na wypadek przepełnienia.

### Skrypt
- Napisany w języku JavaScript,
- Odwoływanie się do elementów DOM zrealizowane za pomocą `querySelector`,
- Obsługa zdarzeń zrealizowana za pomocą `eventListener`

##### Działanie skryptu:
1. Kliknięcie przycisków z sekcji `Zmień kolor tła` zmienia tło całej strony na kolor zapisany na przycisku,
2. Wybranie koloru z listy z sekcji `Zmień kolor czcionki` zmienia kolor tekstu w paragrafie znajdującym się w prawej części strony pod zdjęciem,
3. Wpisanie poprawnej wartości liczbowej do pola w sekcji `Podaj rozmiar czcionki w px` oraz zatwierdzenie wartości klawiszem `Enter` ,powoduje zmianę rozmiaru czcionki w paragrafie, w prawej części strony pod zdjęciem, na wpisany przez użytkownika rozmiar w `px`,
4. Wybranie opcji w sekcji `Określ styl listy` powoduje zmianę stylów punktorów dla listy `Lista miejsc do odwiedzenia`
5. Zaznaczenie pola `TAK` w sekcji `Czy podkreślić nagłówek?` powoduje podkreślenie nagłówka listy `Lista miejsc do odwiedzenia`.
6. Najechanie kursorem myszy na obraz w sekcji prawej powoduje zmianę jego szerokości z `60%` na `90%`. Gdy kursor opuści obraz, zdjęcie wraca do poprzedniej szerokości.

:triangular_flag_on_post: Domyślne ustawienia strony powinny być odzwierciedlone w formularzach, w momencie pierwszego uruchomienia.




