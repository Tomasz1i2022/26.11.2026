// Twoje rozwiazanie
const imie = document.querySelector('#imie');
const osoby = document.querySelector('#osoby');
const przycisk = document.querySelector('#zapisz');
const blad = document.querySelector('#blad');
const wynik = document.querySelector('#wynik');

przycisk.addEventListener('click', function(e){
    e.preventDefault();

    const nazwisko = imie.value.trim();
    const liczba = Number(osoby.value);

    blad.textContent = '';
    wynik.textContent = '';

    if(nazwisko === ''){
        blad.textContent = 'Podaj imię i nazwisko.';
    }else if(osoby.value.trim() === '' || !Number.isInteger(liczba) || liczba < 1 || liczba > 4){
        blad.textContent = 'Liczba osób musi być od 1 do 4.';
    }else{
        wynik.textContent = 'Zapisano: ' + nazwisko + '. Liczba osób: ' + liczba + '.';
    }
})