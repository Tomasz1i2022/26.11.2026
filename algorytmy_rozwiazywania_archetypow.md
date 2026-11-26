# Algorytmy i przepisy rozwiązywania zadań JavaScript (INF.03)
### Przewodnik „krok po kroku” w przystępnym języku dla uczniów

Ten dokument to zbiór uniwersalnych **„przepisów”** na każdy typ zadania ze skryptem JavaScript, jaki może pojawić się na egzaminie zawodowym **INF.03**. 

Nie musisz uczyć się kodu na pamięć — wystarczy, że zrozumiesz **kolejność myślenia**, a odpowiednie metody dobierzesz z tabelki dołączonej do arkusza CKE.

---

## Uniwersalna zasada każdego skryptu na egzaminie: W-P-O-W

Każdy skrypt w INF.03 realizuje ten sam schemat czterech kolejnych kroków:
1. **W – Wyszukaj (pobierz referencję):** Zlokalizuj w drzewie DOM elementy, z których czytasz dane, oraz miejsce, gdzie wpiszesz wynik.
2. **P – Pobierz wartość i przekształć:** Odczytaj wartości i pamiętaj, że liczby z formularza zawsze przychodzą jako tekst (zamień je na prawdziwe liczby!).
3. **O – Oblicz lub zdecyduj:** Użyj warunków `jeśli... to...`, pętli lub wzorów matematycznych.
4. **W – Wyświetl:** Wstaw gotowy tekst lub zmień wygląd strony bez jej przeładowywania.

---

## ARCHETYP 1: Interaktywny kalkulator / Konfigurator cenowy
*(Przykłady z arkuszy: koszt paliwa, wycena malowania ścian, raty za kurs, zabiegi w salonie)*

### Jak wygląda to zadanie?
Użytkownik wpisuje ilość, wybiera opcję z listy lub zaznacza checkboxy, klika przycisk „Oblicz”, a w paragrafie pod spodem pojawia się kwota.

### Przepis krok po kroku:
1. **Wyszukaj elementy (pobierz referencje):**
   - Pobierz referencję do pola z liczbą (np. metry, litry, sztuki).
   - Pobierz referencję do opcji wyboru (listy rozwijalnej, zaznaczonych pól radio lub checkboxów).
   - Pobierz referencję do akapitu przeznaczonego na wynik.
2. **Pobierz i zamień na liczby:**
   - Wyciągnij wpisaną wartość z pola i **od razu zamień ją na liczbę** (np. znakiem `+` lub `Number()`). Jeśli tego nie zrobisz, dodawanie sklei teksty: `10 + 20` da `1020` zamiast `30`!
3. **Sprawdź, czy dane są poprawne:**
   - Jeśli pole jest puste lub liczba jest mniejsza od zera:
     - Wpisz w wyniku ostrzeżenie (np. „Podaj poprawną liczbę”).
     - Zakończ działanie skryptu w tym miejscu (nie licz dalej).
4. **Ustal stawkę bazową:**
   - *Jeśli* wybrano wariant A -> stawka wynosi np. 50 zł.
   - *W przeciwnym razie jeśli* wybrano wariant B -> stawka wynosi np. 80 zł.
5. **Dolicz dodatki (Checkboxy):**
   - *Dla każdego dodatku:* sprawdź, **czy jest zaznaczony** (właściwość `.checked`).
   - Jeśli tak -> powiększ stawkę o cenę tego dodatku.
6. **Oblicz wynik końcowy:**
   - `Cena całkowita = ilość * wyliczona stawka`.
7. **Wypisz wynik:**
   - Sformatuj tekst dokładnie tak, jak wymaga arkusz (np. `Koszt całkowity: X zł`).
   - Wstaw tekst do przygotowanego akapitu.

> **Złota zasada:** Przy checkboxach nigdy nie pytaj o `.value` — zawsze sprawdzaj stan zaznaczenia (`.checked`)!

---

## ARCHETYP 2: Formularz kontaktowy i sprawdzanie danych (Walidacja)
*(Przykłady z arkuszy: zgłoszenie sprawy, formularz zapisu, weryfikacja haseł)*

### Jak wygląda to zadanie?
Użytkownik wypełnia formularz i klika „Prześlij”. Jeśli zapomniał zaznaczyć regulaminu lub wpisał różne hasła — pojawia się czerwony błąd lub wyskakuje alert. Jeśli wszystko jest dobrze — pojawia się komunikat z imieniem i nazwiskiem wypisanym wielkimi literami.

### Przepis krok po kroku:
1. **Zatrzymaj stronę (jeśli przycisk jest w `<form>`):**
   - Upewnij się, że kliknięcie przycisku nie odświeża strony.
2. **Wyszukaj elementy formularza (pobierz referencje):**
   - Pobierz referencję do pól imienia, nazwiska, hasła/e-maila oraz checkboxa regulaminu.
   - Pobierz referencję do akapitu podsumowania.
3. **Sprawdź warunki poprawności:**
   - **Krok A (Regulamin):** Sprawdź, czy checkbox regulaminu jest odznaczony.
     - Jeśli nie zaznaczono -> ustaw kolor tekstu akapitu na **czerwony**, wpisz komunikat błędu i przerwij działanie.
   - **Krok B (Puste pola):** Sprawdź, czy pole imienia nie jest puste po odcięciu zbędnych spacji (`.trim()`).
   - **Krok C (Porównanie haseł — jeśli dotyczy):** Sprawdź, czy `hasło 1` różni się od `hasło 2`.
     - Jeśli się różnią -> wyświetl wyskakujące okienko `alert("Hasła różnią się")`.
4. **Gdy wszystko jest poprawne:**
   - Ustaw kolor tekstu na właściwy (np. `Navy` lub zielony).
   - Zamień imię i nazwisko na wielkie litery (`.toUpperCase()`).
   - Zamień e-mail na małe litery (`.toLowerCase()`).
   - Złóż komunikat ze słów i zmiennych, używając łamania linii `<br>`.
   - Wstaw treść do akapitu wyniku.

> **Złota zasada:** Zawsze pamiętaj o resecie koloru — jeśli uczeń najpierw zrobi błąd (czerwony tekst), a potem go poprawi, kolor musi wrócić do normy!

---

## ARCHETYP 3: Zakładki (Tabs) i formularz krok po kroku (Wizard)
*(Przykłady z arkuszy: przełączanie sekcji Adres / Kontakt, kreator: Krok 1 -> Krok 2 -> Krok 3, przełączanie cytatów)*

### Jak wygląda to zadanie?
Na ekranie widać tylko jeden blok (np. Dane osobowe). Kliknięcie „Dalej” sprawia, że blok 1 znika, a na jego miejscu pojawia się blok 2. Lub: kliknięcie przycisku zakładki pokazuje tylko treść tej jednej zakładki.

### Przepis krok po kroku:
1. **Wyszukaj wszystkie bloki (pobierz referencje do kolekcji):**
   - Wyszukaj z dokumentu wszystkie sekcje/karty naraz (np. po wspólnej klasie `.blok` lub liście identyfikatorów).
2. **Ukryj wszystko (Reset widoku):**
   - Przejdź pętlą po wszystkich blokach i każdemu z nich ustaw styl ukrycia (`display = 'none'`) lub dodaj klasę ukrywającą (np. `ukryty`).
3. **Pokaż tylko ten właściwy:**
   - Wyszukaj blok, który ma być teraz widoczny (na podstawie klikniętego przycisku lub zmiennej numeru kroku).
   - Zmień jego styl na widoczny (`display = 'block'`) lub zabierz mu klasę ukrywającą.
4. **W przypadku cytatów w pętli (1 -> 2 -> 3 -> 1):**
   - Zwiększ licznik o 1.
   - Jeśli licznik przekroczył maksimum (np. jest większy niż 3), przestaw go z powrotem na 1.
   - Pokaż cytat o numerze równym licznikowi.

> **Złota zasada:** Zamiast zgadywać, co było wcześniej otwarte — najpierw hurtowo schowaj wszystkie karty, a potem odsłoń dokładnie tę jedną, o którą chodzi.

---

## ARCHETYP 4: Galeria zdjęć / Slider (Poprzednie – Następne)
*(Przykłady z arkuszy: przeglądarka zdjęć od 1.jpg do 7.jpg z zapętleniem)*

### Jak wygląda to zadanie?
Na środku strony widać duże zdjęcie. Po bokach są przyciski „Poprzednie” i „Następne”. Klikanie zmienia zdjęcie na kolejne. Po dojściu do końca galeria zaczyna się od nowa.

### Przepis krok po kroku:
1. **Stwórz pamięć galerii (poza funkcjami):**
   - Na samej górze pliku stwórz zmienną pamiętającą bieżący numer zdjęcia: `let numerZdjecia = 1;`.
2. **Gdy kliknięto „Następne”:**
   - Zwiększ `numerZdjecia` o 1.
   - **Warunek końca:** Jeśli `numerZdjecia` jest większy niż ostatnie zdjęcie (np. > 7) -> ustaw go na 1.
   - Idź do kroku aktualizacji obrazka.
3. **Gdy kliknięto „Poprzednie”:**
   - Zmniejsz `numerZdjecia` o 1.
   - **Warunek początku:** Jeśli `numerZdjecia` jest mniejszy niż 1 -> ustaw go na numer ostatniego zdjęcia (np. 7).
   - Idź do kroku aktualizacji obrazka.
4. **Zaktualizuj obrazek na stronie:**
   - Wyszukaj element graficzny (pobierz referencję do `<img>`).
   - Zmień jego źródło: `plik = "img/" + numerZdjecia + ".jpg"`.
   - Zmień jego opis alternatywny: `alt = "Zdjęcie nr " + numerZdjecia`.

> **Złota zasada:** Zmienna z numerem zdjęcia MUSI być zadeklarowana poza funkcją (globalnie). Jeśli zadeklarujesz ją wewnątrz funkcji, przy każdym kliknięciu zresetuje się do jedynki!

---

## ARCHETYP 5: Dynamiczna lista, Czat, Koszyk (Tworzenie elementów w locie)
*(Przykłady z arkuszy: czat z losowymi odpowiedziami bota, lista zadań z przekreślaniem, dodawanie odbitek do koszyka)*

### Jak wygląda to zadanie?
Użytkownik wpisuje tekst i klika „Dodaj” lub „Wyślij”. Na stronie pod spodem pojawia się nowy punkt na liście lub nowy dymek wiadomości. W liście może też pojawić się przycisk, którego kliknięcie zmienia styl tego konkretnego wiersza.

### Przepis krok po kroku:
1. **Wyszukaj elementy i pobierz dane wejściowe:**
   - Odczytaj treść z pola tekstowego.
   - Jeśli pole jest puste -> nic nie rób (przerwij).
   - Pobierz referencję do elementu nadrzędnego, do którego będziesz dokładać elementy (np. znacznik `<ul>` lub kontener czatu).
2. **Utwórz nowy element (createElement):**
   - Stwórz nowy pusty tag (np. element listy `li` lub akapit `p`).
   - Wpisz do niego pobrany tekst.
3. **Dołóż przycisk akcji (jeśli zadanie tego wymaga, np. „Wykonane”):**
   - Stwórz nowy przycisk (`button`).
   - Nadaj mu napis „Wykonane”.
   - Przypisz mu reakcję na kliknięcie: *„Gdy ktoś mnie kliknie, przekreśl mój element nadrzędny”* (`line-through`).
   - Włóż ten przycisk do środka nowo utworzonego elementu `li`.
4. **Wstaw całość na stronę (appendChild):**
   - Przypnij gotowy element `li` do listy `<ul>`.
5. **Posprzątaj po sobie:**
   - Wyczyść pole tekstowe (ustaw pusty napis `""`), żeby użytkownik nie musiał go kasować ręcznie.
6. **Obsługa losowej odpowiedzi (jeśli to czat z botem):**
   - Przygotuj stałą tablicę gotowych tekstów.
   - Wylosuj liczbę z przedziału od 0 do długości tablicy minus 1: `indeks = Math.floor(Math.random() * tablica.length)`.
   - Stwórz dymek bota z wylosowanym tekstem i dopnij do czatu.

> **Złota zasada:** `document.createElement()` tylko przygotowuje element w pamięci. Żeby uczeń zobaczył go na stronie, na końcu ZAWSZE musi paść polecenie `.appendChild()`.

---

## ARCHETYP 6: Modyfikator obrazów i filtry wizualne
*(Przykłady z arkuszy: nakładanie filtrów Sepia, Blur, Negatyw, obsługa suwaków Range)*

### Jak wygląda to zadanie?
Użytkownik klika opcje efektów lub przesuwa suwak jasności/przezroczystości, a zdjęcie w czasie rzeczywistym zmienia wygląd dzięki stylom CSS.

### Przepis krok po kroku:
1. **Wyszukaj elementy (pobierz referencje):**
   - Pobierz referencję do elementu `<img>`.
   - Pobierz referencję do suwaka (`<input type="range">`) lub pól wyboru filtrów.
2. **Gdy zmiana zależy od checkboxów / przycisków:**
   - *Jeśli* zaznaczono Blur -> ustaw filtr: `obrazek.style.filter = "blur(6px)"`.
   - *Jeśli* zaznaczono Sepia -> ustaw filtr: `obrazek.style.filter = "sepia(100%)"`.
   - *Jeśli* wybrano Negatyw -> ustaw filtr: `obrazek.style.filter = "invert(100%)"`.
   - *Jeśli* kliknięto powrót do kolorów -> zdejmij filtr: `obrazek.style.filter = "none"`.
3. **Gdy zmiana zależy od suwaka:**
   - Odczytaj aktualną pozycję suwaka (`suwak.value`).
   - Sklej nazwę filtra CSS z jednostką (np. `%` lub `px`):
     - Jasność: `obrazek.style.filter = "brightness(" + suwak.value + "%)"`.
     - Przezroczystość: `obrazek.style.filter = "opacity(" + suwak.value + "%)"`.

> **Złota zasada:** Pamiętaj o dopisaniu jednostki (`px` lub `%`). Sam zapis `blur(6)` w CSS jest niepoprawny i przeglądarka go zignoruje!

---

## ARCHETYP 7: Pętla algorytmiczna / Przelicznik matematyczny
*(Przykłady z arkuszy: przelicznik z systemu dziesiętnego na dwójkowy/binarny)*

### Jak wygląda to zadanie?
Użytkownik wpisuje zwykłą liczbę (np. 13), klika „Przelicz”, a skrypt za pomocą pętli oblicza ciąg zer i jedynek (`1101`).

### Przepis krok po kroku:
1. **Wyszukaj pole i pobierz liczbę wejściową:**
   - Pobierz referencję do pola liczbowego, odczytaj wartość i zamień na liczbę całkowitą.
   - Przygotuj pustą zmienną na wynikowy tekst: `tekstBinarny = ""`.
2. **Pętla przeliczania (dzielenie z resztą):**
   - *Dopóki liczba jest większa od zera:*
     - Policz resztę z dzielenia przez 2 (`liczba % 2`) — to będzie `0` lub `1`.
     - Doklej tę resztę **na początek** budowanego tekstu binarnego.
     - Podziel liczbę przez 2 i odrzuć ułamek (`Math.floor(liczba / 2)`).
3. **Wypisz wynik:**
   - Wstaw wyliczony łańcuch znaków do akapitu wyniku.

---

## Ściągawka egzaminacyjna: Jak nie stracić punktów za drobiazgi

| Pytanie kontrolne przed oddaniem pracy | Co sprawdzić w kodzie? |
|---|---|
| Czy zmienne nazywają się po ludzku? | Używaj `obliczCene`, `liczbaSztuk`, `stawkaBazowa`, a NIE `a`, `b`, `x`, `fun1`. |
| Czy liczby na pewno się dodają? | Zawsze pisz `Number(pole.value)` lub `+pole.value` przed znakiem `+`. |
| Czy sprawdzam zaznaczenie checkboxa? | Pisz `pole.checked`, a NIE `pole.value == true`. |
| Czy tekst ma dokładnie taki format jak w arkuszu? | Zwróć uwagę na spacje, dwukropki, wielkość liter i słowo „zł” na końcu. |
| Czy formularz nie odświeża strony? | Dodaj `type="button"` do każdego przycisku `<button>`. |
