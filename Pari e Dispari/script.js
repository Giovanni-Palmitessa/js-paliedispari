/*
Creare un prompt dove l'utente sceglie pari o dispari
creare un prompt dove l'utente sceglie un numero compreso tra 1 e 5 inclusi
creare una funzione per generare un numero random da 1 a 5 e salvarlo in una variabile
creare una variabile in cui inserire la somma del numero inserito dall'utente e numero random
creare una funzione per stabilire se numero è pari o dispari
SE utente sceglie pari e risultato di somma è pari
    stampa utente ha vinto
ALTRIMENTI 
    stampa computer ha vinto
*/

let evenOrOdd = prompt('Scegli pari o dispari');

const userNumber = parseInt(prompt('Dammi un numero da 1 a 5 compresi:'));

const randomNumComputer = getRandomInteger(1, 5);

const sum = userNumber + randomNumComputer;


function getRandomInteger(min, max) {
  const random = Math.floor(Math.random() * (max - min + 1) ) + min;
   return random;
}

function isEven(number) {
    return number % 2 == 0
}


if (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
    console.log('Non hai inserito un valore corretto, ricarica la pagina!');
} else {
    console.log(`Il numero random del computer è:`, randomNumComputer);
    
    console.log(`Il numero random dell'utente è:`, userNumber);
}

console.log('La somma dei 2 numeri è:', sum);

// if (evenOrOdd === 'pari'){
//     evenOrOdd = true
// } else if (evenOrOdd === 'dispari'){
//     evenOrOdd = true
// }


if (isEven(sum)) {
    console.log('pari');
} else {
    console.log('dispari')
}

if ((evenOrOdd === `pari` && isEven(sum) === true) || (evenOrOdd === `dispari` && isEven(sum) === false)) {
    console.log(`L'utente ha vinto!`);
    document.getElementById('win-or-lose').innerHTML = "L'utente ha vinto!"
} else {
    console.log(`Il computer ha vinto!`);
    document.getElementById('win-or-lose').innerHTML = "Il computer ha vinto!"
}



