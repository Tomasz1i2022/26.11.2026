// Twoje rozwiazanie
const poprzednie = document.querySelector('#poprzednie');
const nastepne = document.querySelector('#nastepne');
const zdjecie = document.querySelector('#zdjecie');
const numer = document.querySelector('#numer');

let aktualneZdjecie = 1;

nastepne.addEventListener('click', function(){
    aktualneZdjecie++;

    if (aktualneZdjecie > 4) {
        aktualneZdjecie = 1;
    }

    zdjecie.src = 'img/praca' + aktualneZdjecie + '.svg';
    zdjecie.alt = 'Praca ' + aktualneZdjecie;
    numer.textContent = 'Zdjęcie ' + aktualneZdjecie + ' z 4';
});

poprzednie.addEventListener('click', function(){
    aktualneZdjecie--;

    if (aktualneZdjecie < 1){
        aktualneZdjecie = 4;
    }

    zdjecie.src = 'img/praca' + aktualneZdjecie + '.svg';
    zdjecie.alt = 'Praca ' + aktualneZdjecie;
    numer.textContent = 'Zdjęcie ' + aktualneZdjecie + ' z 4';
});
