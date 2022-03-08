// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
// }

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
for (let i = 0; i < gifts.length; i++){
    console.log(`Wrapped ${gifts[i]} and added a bow!`); 
    debugger;
}
return gifts; 
}

wrapGifts(gifts); 

function writeCards(array, string){
    let birthdayCards = []
    for (let i = 0; i < array.length; i++) {
        birthdayCards.push(`Thank you, ${array[i]}, for the wonderful ${string} gift!`)
    }

    return birthdayCards
}

function countDown(number){
    while (number > 0){ 
        console.log(number); 
        number -=1
    }
    console.log(number);
}