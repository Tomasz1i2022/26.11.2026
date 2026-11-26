# Zadanie 3. Pole namiotowe

Czas: około 18 minut. Pracujesz w pliku `script.js`. Strona i wygląd są gotowe. Nazwy narzędzi masz w pliku `Wykaz_metod.md` obok zestawu zadań.

## Cel

Pole namiotowe liczy opłatę za pobyt. Uczeń podaje dzień przyjazdu, dzień wyjazdu i stawkę za dobę, a po kliknięciu przycisku „Oblicz” w akapicie wyniku widać liczbę dób i kwotę albo komunikat, gdy dat nie da się przyjąć.

## Wymagania

1. Liczba dób to liczba dni kalendarzowych od daty przyjazdu do daty wyjazdu. Przyjazd 1 lipca i wyjazd 4 lipca dają 3 doby, bo liczy się długość pobytu, a nie obie daty naraz.
2. Ten sam dzień przyjazdu i wyjazdu daje 0 dób i kwotę 0 zł.
3. Kwota jest iloczynem liczby dób i stawki za jedną dobę.
4. Gdy któraś data jest pusta albo stawka nie jest liczbą większą albo równą zero, w `#wynik` jest wyłącznie tekst „Uzupełnij daty i stawkę.”
5. Gdy wyjazd przypada wcześniej niż przyjazd, w `#wynik` jest wyłącznie tekst „Data wyjazdu jest wcześniejsza niż data przyjazdu.”
6. Przy poprawnym pobycie tekst ma postać „Liczba dób: 3. Do zapłaty: 120 zł.” Kwota nie dostaje dopisanych zer po przecinku.

## Przykład

Ustaw przyjazd na 2026-07-01, wyjazd na 2026-07-04 i stawkę 40, a potem kliknij „Oblicz”. W akapicie wyniku jest tekst „Liczba dób: 3. Do zapłaty: 120 zł.”

Ustaw wyjazd na 2026-07-01, tak jak przyjazd, i kliknij „Oblicz” ponownie. Tekst zmienia się na „Liczba dób: 0. Do zapłaty: 0 zł.”

Ustaw wyjazd na 2026-06-28 i kliknij „Oblicz”. Tekst zmienia się na „Data wyjazdu jest wcześniejsza niż data przyjazdu.”
