
function shuffle(array) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }


var cards = [
{ value: "2", image: './Images/svg_playing_cards/fronts/clubs_2.svg'},
{ value: "3", image: './Images/svg_playing_cards/fronts/clubs_2.svg'},
{ value: "2", image: './Images/svg_playing_cards/fronts/clubs_2.svg'},
{ value: "3", image: './Images/svg_playing_cards/fronts/clubs_2.svg'},
{ value: "4", image: './Images/svg_playing_cards/fronts/clubs_2.svg'},
{ value: "5", image: './Images/svg_playing_cards/fronts/clubs_2.svg'},
{ value: "4", image: './Images/svg_playing_cards/fronts/clubs_2.svg'},
{ value: "5", image: './Images/svg_playing_cards/fronts/clubs_2.svg'},
]
var cardsEls = document.querySelectorAll('.cards')

shuffle(cards)
 

    cardsEls.forEach (function (element, index) {
    element.addEventListener('click', function() {
        element.setAttribute('src',clickedCard.images)
    } )       
})