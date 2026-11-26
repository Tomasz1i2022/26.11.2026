// Twoje rozwiazanie
const wolne = document.querySelector('#wolne');
const przycisk = document.querySelector('#sprawdz');
const wynik = document.querySelector('#wynik');

przycisk.addEventListener('click', function(){
    if(wolne.value < 5){
        wynik.classList.add('malo');
        wynik.textContent = 'Zostało mało miejsc: ' + wolne.value + '.';
    }else if(wolne.value >= 5){
        wynik.classList.remove('malo');
        wynik.textContent = 'Wolnych miejsc: ' + wolne.value + '.';
    }else{
        wynik.classList.remove('malo');
        wynik.textContent = 'Podaj liczbę wolnych miejsc od zera wzwyż.';
    }
})