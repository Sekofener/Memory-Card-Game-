
const section = document.querySelector("section")
const playerLivesCount = document.querySelector("span")
const playerLives = 6;

// Link  text 
playerLivesCount.textContent = playerLives;

// Generate  the data
const  getData = () => [
{ imgSrc: "./Images/front/clubs_2.svg" , name: "clubs_2" },
{ imgSrc: "./Images/front/clubs_3.svg" , name: "clubs_3" },
{ imgSrc: "./Images/front/clubs_4.svg" , name: "clubs_4" },
{ imgSrc: "./Images/front/clubs_5.svg" , name: "clubs_5" },
{ imgSrc: "./Images/front/clubs_6.svg" , name: "clubs_6" },
{ imgSrc: "./Images/front/clubs_7.svg" , name: "clubs_7" },
{ imgSrc: "./Images/front/clubs_2.svg" , name: "clubs_2" },
{ imgSrc: "./Images/front/clubs_3.svg" , name: "clubs_3" },
{ imgSrc: "./Images/front/clubs_4.svg" , name: "clubs_4" },
{ imgSrc: "./Images/front/clubs_5.svg" , name: "clubs_5" },
{ imgSrc: "./Images/front/clubs_6.svg" , name: "clubs_6" },
{ imgSrc: "./Images/front/clubs_7.svg" , name: "clubs_7" },
];

// Randomize Function
const  randomize = () => {
    const cardData = getData();
  
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
};

// Card Generator  Function
const  cardGenerator = () => {
const cardData = randomize();
// Generate the HTML
cardData.forEach((item) => {
const card = document.createElement("div");
const face = document.createElement("img");
const back = document.createElement("div");
card.classList = "card";
face.classList = "face";
 back.classList = "back";  
 // Attach the info to the cards
 face.src = item.imgSrc;

// Atach the cards to the section
section.appendChild(card);
card.appendChild(face);
card.appendChild(back);

});

};

cardGenerator();