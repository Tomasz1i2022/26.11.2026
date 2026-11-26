# Zadanie 4. Zapisy na zawody

Czas: około 18 minut. Pracujesz w pliku `script.js`. Strona i wygląd są gotowe. Nazwy narzędzi masz w pliku `Wykaz_metod.md` obok zestawu zadań.

## Cel

Szkoła zapisuje drużynę na zawody. Po kliknięciu przycisku „Zapisz” strona zostaje na miejscu, a uczeń widzi albo jeden komunikat błędu, albo potwierdzenie zapisu.

## Wymagania

1. Po kliknięciu „Zapisz” przeglądarka zostaje przy tej stronie, a wpisane dane nie znikają same.
2. Imię i nazwisko po odrzuceniu spacji z początku i końca nie może być puste. Pole wypełnione samymi spacjami liczy się jako puste.
3. Liczba osób musi być całkowita i mieścić się w zakresie od 1 do 4.
4. Gdy imię i nazwisko jest puste, w akapicie `#blad` jest tekst „Podaj imię i nazwisko.” Akapit `#wynik` jest wtedy pusty. Gdy jednocześnie liczba osób jest zła, zostaje tylko komunikat o imieniu i nazwisku.
5. Gdy imię i nazwisko jest poprawne, a liczba osób nie, w `#blad` jest tekst „Liczba osób musi być od 1 do 4.” Akapit `#wynik` jest wtedy pusty.
6. Gdy oba pola są poprawne, `#blad` jest pusty, a `#wynik` pokazuje tekst w postaci „Zapisano: Anna Kot. Liczba osób: 3.” W potwierdzeniu nie ma spacji, które stały tylko na brzegu imienia i nazwiska.

## Przykład

Zostaw oba pola puste i kliknij „Zapisz”. Pod formularzem jest tekst „Podaj imię i nazwisko.”, a akapit wyniku jest pusty. Strona się nie przeładowuje.

Wpisz „Anna Kot”, w liczbie osób zostaw 0 i kliknij „Zapisz” ponownie. Komunikat błędu zmienia się na „Liczba osób musi być od 1 do 4.” Akapit wyniku nadal jest pusty.

Wpisz imię i nazwisko z odstępem na początku, „ Anna Kot”, oraz liczbę osób 3, a potem kliknij „Zapisz”. Komunikat błędu znika. W akapicie wyniku jest tekst „Zapisano: Anna Kot. Liczba osób: 3.”
