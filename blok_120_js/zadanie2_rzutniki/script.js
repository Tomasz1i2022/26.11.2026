// Twoje rozwiazanie
const dni = document.querySelector('#dni');
const statyw = document.querySelector('#statyw');
const pilot = document.querySelector('#pilot');
const przycisk = document.querySelector('#oblicz');
const wynik = document.querySelector('#wynik');

przycisk.addEventListener('click', function(){
    if(dni.value != ''){
        let cena = 35 * Number(dni.value);
        if(statyw.checked){
            cena = cena + Number(statyw.value);
        }
        if(pilot.checked){
            cena = cena + Number(pilot.value);
        }
        wynik.textContent = 'Do zapłaty: ' + cena + 'zł';
    }else{
        wynik.textContent = 'Uzupełnij dane.';
    }
})