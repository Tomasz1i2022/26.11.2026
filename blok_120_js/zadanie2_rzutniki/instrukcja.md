# Zadanie 2. Rzutniki

Czas: około 15 minut. Pracujesz w pliku `script.js`. Strona i wygląd są gotowe. Nazwy narzędzi masz w pliku `Wykaz_metod.md` obok zestawu zadań.

## Cel

Wypożyczalnia rzutników liczy kwotę za cały okres. Uczeń podaje liczbę dni i zaznacza dodatki, a po kliknięciu przycisku „Oblicz” w akapicie wyniku pojawia się kwota do zapłaty.

## Wymagania

1. Każdy dzień wypożyczenia kosztuje 35 zł.
2. Zaznaczenie statywu dodaje 20 zł do całej kwoty, jeden raz, niezależnie od liczby dni. Zaznaczenie pilota dodaje 15 zł do całej kwoty, też jeden raz.
3. Niezaznaczony dodatek nie zmienia kwoty.
4. W akapicie `#wynik` pojawia się tekst w postaci „Do zapłaty: 125 zł”. Kwota jest liczbą bez dopisanych zer po przecinku.
5. Gdy liczba dni nie jest całkowita i większa od zera, w `#wynik` jest wyłącznie tekst „Uzupełnij dane.”

## Przykład

Wpisz 3 dni, zaznacz tylko statyw i kliknij „Oblicz”. W akapicie wyniku jest tekst „Do zapłaty: 125 zł”.

Wpisz 2 dni, odznacz oba dodatki i kliknij „Oblicz” ponownie. Tekst zmienia się na „Do zapłaty: 70 zł”.

Wpisz 4 dni, zaznacz tylko pilot i kliknij „Oblicz”. Tekst zmienia się na „Do zapłaty: 155 zł”.
