/*

chiedere all'utente di inserire una parola con un prompt
creare una funzione di controllo 

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

reverseString(wordReverse);




if (reverseString === wordReverse) {
    console.log('La parola inserita è palindroma!');
} else {
    console.log('la parola inserita non è palindroma!');
}