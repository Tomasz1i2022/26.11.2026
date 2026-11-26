// Twoje rozwiazanie
const model = document.querySelector('#model');
const przycisk = document.querySelector('#pokaz');
const zdjecie = document.querySelector('#podglad');

przycisk.addEventListener('click', function(){
    if(model.value == 'miejska'){
        zdjecie.setAttribute('src', 'img/miejska.svg');
        zdjecie.setAttribute('alt', 'Hulajnoga miejska');
    }else if(model.value == 'terenowa'){
        zdjecie.setAttribute('src', 'img/terenowa.svg');
        zdjecie.setAttribute('alt', 'Hulajnoga terenowa');
    }else if(model.value == 'skladana'){
        zdjecie.setAttribute('src', 'img/skladana.svg');
        zdjecie.setAttribute('alt', 'Hulajnoga skladana');
    }
})