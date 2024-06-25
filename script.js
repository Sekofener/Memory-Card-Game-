
// Helper function
function shuffle(array) {
}
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
  



//Our codes
var cards =[
    {value: '2', Image: './images/Images/svg_playing_cards/fronts/clubs_2.svg' }, 
    {value: '3', Image: './images/Images/svg_playing_cards/fronts/clubs_2.svg' }, 
    {value: '2', Image: './images/Images/svg_playing_cards/fronts/clubs_2.svg' }, 
    {value: '3', Image: './images/Images/svg_playing_cards/fronts/clubs_2.svg' }, 
    {value: '1', Image: './images/Images/svg_playing_cards/fronts/clubs_2.svg' }, 
    {value: '4', Image: './images/Images/svg_playing_cards/fronts/clubs_2.svg' }, 
    {value: '4', Image: './images/Images/svg_playing_cards/fronts/clubs_2.svg' }, 
    {value: '1', Image: './images/Images/svg_playing_cards/fronts/clubs_2.svg' }, 




]
var cardEls = document.querySelectorAll('.cards')

shuffle(cards)

cardEls.forEach(function (el, index) {
        el.addEventListener('click', function()  {
        var clickedCard = cards[index]
        // console.log(index, el)
        })
      })

