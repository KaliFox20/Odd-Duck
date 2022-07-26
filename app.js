'use strict';

console.log('Howdy partner!');


// Gobal Variables
let allVotes = 25;
let allProducts = [];

// DOM Stuff

let imgContainer = document.getElementById('img-container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');
let resultButton = document.getElementById('show-results-btn');
let resultList = document.getElementById('results-list');


// Constructor Functions

function Product(name, photoExtension = 'jpg') {
  this.name = name;
  this.photo = `img/${name}.${photoExtension}`;
  this.views = 0;
  this.votes = 0;

  allProducts.push(this);
}

// Object Creation

new Product('bag');
new Product('banana');
new Product('bathroom');
new Product('boots');
new Product('breakfast');
new Product('bubblegum');
new Product('chair');
new Product('cthulhu');
new Product('dog-duck');
new Product('dragon');
new Product('pen');
new Product('pet-sweep');
new Product('scissors');
new Product('shark');
new Product('sweep', 'png');
new Product('tauntaun');
new Product('unicorn');
new Product('water-can');
new Product('wine-glass');

// Helper Functions
function randomIndexGenerator() {
  return Math.floor(Math.random() * allProducts.length);
}
//      make functunion to Generate random pictures non-repeating
// function renderImgs() {
//   let imgOneIndex = randomIndexGenerator();
//   let imgTwoIndex = randomIndexGenerator();
//   let imgThreeIndex = randomIndexGenerator();



//   // make sure they are unique each round
//   while (imgOneIndex === imgTwoIndex === imgThreeIndex) {
//     imgTwoIndex = randomIndexGenerator();
//     imgThreeIndex = randomIndexGenerator();
//   }
//   imgOne.src = allProducts[imgOneIndex].photo;
//   imgOne.alt = allProducts[imgOneIndex].name;
//   imgOne.name = allProducts[imgOneIndex].name;
//   allProducts[imgOneIndex].views++;
//   imgTwo.src = allProducts[imgTwoIndex].photo;
//   imgTwo.alt = allProducts[imgTwoIndex].name;
//   imgTwo.name = allProducts[imgTwoIndex].name;
//   allProducts[imgTwoIndex].views++;
//   imgTwo.src = allProducts[imgThreeIndex].photo;
//   imgTwo.alt = allProducts[imgThreeIndex].name;
//   imgTwo.name = allProducts[imgThreeIndex].name;
//   allProducts[imgThreeIndex].views++;
// }
//Event Handlers

// function handleClick(event) {
//   // - click - on the imgs - rerender new images(increase the views on the goats that are rendered) - count the vote of the goat that was clicked/ lower our total number of votes
//   let imgClicked = event.target.name;
//   console.dir(imgClicked);

//   for (let i = 0; i < allProducts.length; i++) {
//     if (imgClicked === allProducts[i].name) {
//       allProducts[i].votes++;
//     }
//   }
//   allVotes--;

//   renderImgs();

//   if (allVotes === 0) {
//     imgContainer.removeEventListener('click', handleClick);
//   }
// }

// function handleShowResults() {
//   if (allVotes === 0) {
//     for (let i = 0; i < allProducts.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = `${allProducts[i].name}: views: ${allProducts[i].views}, votes: ${allProducts[i].votes}`;
//       resultsList.appendChild(liElem);
//     }
//     resultBtn.removeEventListener('click', handleShowResults);
//   }
// }

// // ********* EVENT LISTENERS *******************
// imgContainer.addEventListener('click', handleClick);
// resultBtn.addEventListener('click', handleShowResults);

