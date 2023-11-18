let a = document.querySelector('#firstnumber');
let b = document.querySelector('#secondnumber');
let resultat = document.querySelector('#resultat');

function PGCD() {
    if (b.value) {
        let total = (b.value, a.value % b.value);
        resultat.value = total;
    } else {
        return Math.abs(a.value);
    }
}

let button = document.querySelector('#valider');
button.addEventListener('click', PGCD);
