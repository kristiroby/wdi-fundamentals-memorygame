const cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];

var checkForMatch = function () {
if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
} 
else if (cardsInPlay.length === 2 && cardsInPlay[0] !== cardsInPlay[1]) {
	alert("Sorry try again");
}	
}

function flipCard (cardId){
console.log("User flipped " + cards[cardId]);
cardsInPlay.push(cards[cardId]);

checkForMatch();
}

flipCard(0);
flipCard(1);



