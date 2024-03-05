var currentCardIndex = 0;
var flashcards = document.getElementsByClassName('flashcard');

function flipCard(index) {
  var card = flashcards[index - 1];
  if (card.style.transform === 'rotateY(180deg)') {
    card.style.transform = 'rotateY(0deg)';
  } else {
    card.style.transform = 'rotateY(180deg)';
  }
}

function nextCard() {
  if (currentCardIndex < flashcards.length - 1) {
    // Hide the current card
    flashcards[currentCardIndex].style.display = 'none';
    
    // Show the next card
    currentCardIndex++;
    flashcards[currentCardIndex].style.display = 'block';
  }
}
function prevCard() {
  if (currentCardIndex > 0) {
    // Hide the current card
    flashcards[currentCardIndex].style.display = 'none';
    
    // Show the previous card
    currentCardIndex--;
    flashcards[currentCardIndex].style.display = 'block';
  }
}
