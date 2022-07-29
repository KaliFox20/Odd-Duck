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

// Local Storage stuff
let retreivedP = localStorage.getItem('myProducts');
let parsedProducts = JSON.parse(retreivedP);

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

let pIndexArr = [];

//      make functunion to Generate random pictures non-repeating
function renderImgs() {


  // make sure they are unique each round
  while (pIndexArr.length < 6) {
    let randNum = randomIndexGenerator();
    if (!pIndexArr.includes(randNum)) {
      pIndexArr.push(randNum);
    }
  }
  let imgOneIndex = pIndexArr.shift();
  let imgTwoIndex = pIndexArr.shift();
  let imgThreeIndex = pIndexArr.shift();

  imgOne.src = allProducts[imgOneIndex].photo;
  imgOne.alt = allProducts[imgOneIndex].name;
  allProducts[imgOneIndex].views++;
  imgTwo.src = allProducts[imgTwoIndex].photo;
  imgTwo.alt = allProducts[imgTwoIndex].name;
  allProducts[imgTwoIndex].views++;
  imgThree.src = allProducts[imgThreeIndex].photo;
  imgThree.alt = allProducts[imgThreeIndex].name;
  allProducts[imgThreeIndex].views++;
}

renderImgs();


//Event Handlers

function handleClick(event) {
  // - click - on the imgs - rerender new images(increase the views on the goats that are rendered) - count the vote of the goat that was clicked/ lower our total number of votes
  let imgClicked = event.target.name;
  console.dir(imgClicked);

  for (let i = 0; i < allProducts.length; i++) {
    if (imgClicked === allProducts[i].name) {
      allProducts[i].votes++;
    }
  }
  allVotes--;

  renderImgs();

  if (allVotes === 0) {
    imgContainer.removeEventListener('click', handleClick);
  }
}

// Chart Stuff

let canvasElem = document.getElementById('my-chart');

function renderChart() {
  let pNames = [];
  let pVotes = [];
  let pViews = [];

  for (let i = 0; i < allProducts.length; i++) {
    pNames.push(allProducts[i].name);
    pVotes.push(allProducts[i].votes);
    pViews.push(allProducts[i].views);

  }
  let myObj = {
    type: 'bar',
    data: {
      labels: pNames,
      datasets: [{
        label: '# of Votes',
        data: pVotes,
        backgroundColor: [
          '#ff7300',
          '#fffb00',
          '#48ff00',
          '#00ffd5',
          '#002bff',
          '#7a00ff',
          '#ff00c8',
          '#ff0000'
        ],
        borderColor: [
          '#ff7300',
          '#fffb00',
          '#48ff00',
          '#00ffd5',
          '#002bff',
          '#7a00ff',
          '#ff00c8',
          '#ff0000'
        ],
        borderWidth: 1
      },
      {
        label: '# of Views',
        data: pViews,
        backgroundColor: [
          '#ff0000',
          '#ff7300',
          '#fffb00',
          '#48ff00',
          '#00ffd5',
          '#002bff',
          '#7a00ff',
          '#ff00c8',
          '#ff0000'
        ],
        borderColor: [
          '#ff0000',
          '#ff7300',
          '#fffb00',
          '#48ff00',
          '#00ffd5',
          '#002bff',
          '#7a00ff',
          '#ff00c8',
          '#ff0000'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };
  new Chart(canvasElem, myObj);

}


function handleShowResults() {
  if (allVotes === 0) {
    let stringifiedProducts = JSON.stringify(allProducts);
    localStorage.setItem('myProducts', stringifiedProducts);
    for (let i = 0; i < allProducts.length; i++) {
      renderChart();
      // let liElem = document.createElement('li');
      // liElem.textContent = `${allProducts[i].name}: views: ${allProducts[i].views}, votes: ${allProducts[i].votes}`;
      // resultList.appendChild(liElem);
    }
    resultButton.removeEventListener('click', handleShowResults);
  }
}

function Retriveinfo(){
  for(let i = 0; i < parsedProducts.length; i++){
    console.log(retreivedP);
  }
}

// // ********* EVENT LISTENERS *******************
imgContainer.addEventListener('click', handleClick);
resultButton.addEventListener('click', handleShowResults);

