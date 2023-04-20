/*
Creare un prompt dove l'utente sceglie pari o dispari
creare un prompt dove l'utente sceglie un numero compreso tra 1 e 5 inclusi
creare una funzione per generare un numero random da 1 a 5 e salvarlo in una variabile
creare una variabile in cui inserire la somma del numero inserito dall'utente e numero random
creare una funzione per stabilire se numero è pari o dispari
SE numero utente > numero computer 
    stampa L'utente ha vinto
ALTRIEMENTI 
    stampa Il computer ha vinto
*/

const evenOrOdd = prompt('Scegli pari o dispari');

const userNumber = parseInt(prompt('Dammi un numero da 1 a 5 compresi:'));

const randomNumComputer = getRandomInteger(1, 5);

function getRandomInteger(min, max) {
  const random = Math.floor(Math.random() * (max - min + 1) ) + min;
   return random;
}


if (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
    console.log('Non hai inserito un valore corretto, ricarica la pagina!');
} else {
    console.log(`Il numero random del computer è:`, randomNumComputer);
    
    console.log(`Il numero random dell'utente è:`, userNumber);
}

