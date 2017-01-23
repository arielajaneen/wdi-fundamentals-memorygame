console.log("JS file is connected to HTML! Woo!")

var cards = ["queen", "king", "queen", "king"];

var cardsInPlay = [];

var createBoard = function(){
	for (var i = 0; i < cards.length; i++) {
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);
	};
var isMatch = function() {

};

function isTwocards () {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (cardsInPlay.length === 2){
	isMatch(cardsInPlay);
	if(this.getAttribute('data-card') === "queen"){
		cardElement.innerHTML = '<img src="queen_playing_card.png" alt="Queen of Spades" />';
	}	
	else {
		cardElement.innerHTML = '<img src="king_playing_card.png" alt="king of Spades" />';
	}	
	cardsInPlay = [];
}	
}

var createCards = function() {
var gameBoard = document.getElementsByID('game-board'); {
	for (i = 0; i < 4; i++)
	var newCard = document.createElement('div');
	newCard.classname = "card";
	newCard.setAttribute('class', 'card');
	newCard.setAttribute('id', 'class');
	newCard.setAttribute('data-card', cards[i]);
	gameBoard.appendChild(newcard);
	}
};




createCards();	


