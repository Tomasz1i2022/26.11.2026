// Twoje rozwiazanie
const przyjazd = document.querySelector('#przyjazd');
const wyjazd = document.querySelector('#wyjazd');
const stawka = document.querySelector('#stawka');
const przycisk = document.querySelector('#oblicz');
const wynik = document.querySelector('#wynik');

przycisk.addEventListener('click', function() {
    let przyjazdData = new Date(przyjazd.value);
    let wyjazdData = new Date(wyjazd.value);
    let cena = Number(stawka.value);

    if (!przyjazd.value || !wyjazd.value || stawka.value === '' || !Number.isFinite(cena) || cena < 0) {
        wynik.textContent = 'Uzupełnij daty i stawkę.';
        return;
    }
    if (wyjazdData < przyjazdData) {
        wynik.textContent = 'Data wyjazdu jest wcześniejsza niż data przyjazdu.';
        return;
    }
    
    const roznica = wyjazdData - przyjazdData;
    const doby = roznica / (1000 * 60 * 60 * 24);
    const kwota = doby * cena;

    wynik.textContent = 'Liczba dób: ' + doby + '. Do zapłaty: ' + kwota + ' zł.';
});