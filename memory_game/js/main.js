const cards = [
{
	rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];


const cardsInPlay = [];

const checkForMatch = function () {
	if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} 
	else if (cardsInPlay.length === 2 && cardsInPlay[0] !== cardsInPlay[1]) {
		alert("Sorry try again");
	}	
}

function flipCard () {
	const cardId = this.getAttribute('data-id');
	const clickedCard = cards[cardId];
	console.log("User flipped " + clickedCard.rank);
	cardsInPlay.push(clickedCard.rank);
	console.log(clickedCard.cardImage);
	console.log(clickedCard.suit);

	this.setAttribute('src', clickedCard.cardImage)

	checkForMatch();
}

function createBoard() {
	for (let i = 0; i < cards.length; i++) {
		const cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
}
};
createBoard();



