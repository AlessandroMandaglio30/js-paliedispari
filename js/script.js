// PALINDROMA

function isPalindroma(parola) {
    let nuovaParola = '';
    let palindroma = false;
    for (i = parola.length - 1; i >= 0; i--) {
        nuovaParola += parola[i];
    }
    if (nuovaParola == parola) {
        palindroma = true;
    }
    return palindroma;
}

let parola = prompt("Inserisci parola");

if (isPalindroma(parola)) {
    console.log(parola + ' è palindroma');
}
else {
    console.log(parola + ' non è palindroma');
}
