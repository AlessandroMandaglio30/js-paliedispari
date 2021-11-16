// PALINDROMA

// function isPalindroma(parola) {
//     let nuovaParola = '';
//     let palindroma = false;
//     for (i = parola.length - 1; i >= 0; i--) {
//         nuovaParola += parola[i];
//     }
//     if (nuovaParola == parola) {
//         palindroma = true;
//     }
//     return palindroma;
// }

// let parola = prompt("Inserisci parola");

// if (isPalindroma(parola)) {
//     console.log(parola + ' è palindroma');
// }
// else {
//     console.log(parola + ' non è palindroma');
// }


// PARI E DISPARI

// GENERATORE NUMERO RANDOM
function generaNumero(n) {
    return Math.floor(Math.random() * (n - 1) + 1);
}

// CONTROLLO PARI O DISPARI
function isPari(n) {
    if (n % 2 == 0) {
        return true;
    }
    return false;
}

// SCELTA PARI O DISPARI
let scelta = prompt("Scegliere pari o dispari");

// CONDIZIONE
if (scelta == 'pari' || scelta == 'dispari') {

    // SCELTA NUMERO MIO
    let numeroMio = parseInt(prompt('inserisci un numero da 1 a 5'));
    console.log(numeroMio);

    // SCLETA NUMERO COMPUTER
    let numeroComputer = parseInt(generaNumero(5));
    console.log(numeroComputer);

    // SOMMA DEI DUE DUE NUMERI
    let somma = numeroComputer + numeroMio;

    if (scelta == 'pari') {
        if (isPari(somma)) {
            console.log('la somma ' + somma + ' è pari, vinco io');
        } else {
            console.log('la somma ' + somma + ' è dispari, vince il computer');
        }

    } else {
        if (isPari(somma)) {
            console.log('la somma ' + somma + ' è pari, vince il computer');
        } else {
            console.log('la somma ' + somma + ' è dispari, vinco io');
        }
    }
} else {
    console.log('la parola inserita non è valida')
}


