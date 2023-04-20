/*

chiedere all'utente di inserire una parola con un prompt
creare una funzione di controllo 
SE (funzione(parola inserita) è uguale a parola inserita)
    stampa HAI INSERITO UNA PAROLA PALINDROMA
ALTRIMENTI
    STAMPA NON HAI INSERITO UNA PAROLA PALINDROMA
*/

const wordReverse = prompt('inserisci una parola e ti dirò se è palindroma!');

function reverseString(str) {
    const splitString = str.split(""); 

    console.log('Parola splittata', splitString);
 
    const reverseArray = splitString.reverse();

    console.log('Parola al contrario', reverseArray);
 
    const joinArray = reverseArray.join("");

    console.log('Parola al contrario unita', joinArray)
    
    return joinArray;
}


if (reverseString(wordReverse) === wordReverse) {
    console.log('La parola inserita è palindroma!');
} else {
    console.log('la parola inserita non è palindroma!');
}