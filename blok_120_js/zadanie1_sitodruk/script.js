// Twoje rozwiazanie
const nadruk = document.querySelector('#nadruk');
const sztuki = document.querySelector('#sztuki');
const przycisk = document.querySelector('#oblicz');
const wynik = document.querySelector('#wynik');

przycisk.addEventListener('click', function(){
    if(nadruk.value != '' && sztuki.value != ''){
        let cena = nadruk.value * sztuki.value;
        wynik.textContent = 'Do zapłaty: ' + cena + 'zł';
    }else{
        wynik.innerHTML = 'Uzupełnij dane';
    }
})