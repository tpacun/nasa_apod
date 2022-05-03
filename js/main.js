// declare variables, date, urls

const baseUrl = `https://api.nasa.gov/planetary/apod?api_key=8chDM5TyNYtiZItHmQXpukw3SIpAkUaQei3KefuR`
const date = new Date();
let todayDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
let apiData;

//inital load in of today's picture

loadIn(baseUrl, todayDate)

// calls to api and saves data, saves the date of that data to history, populates photo

async function loadIn(url, selectedDate=todayDate) {
  let data = await getData(`${url}&date=${selectedDate}`)
  saveHistory(data)
  populatePhoto(data)
  loadHistory()
  apiData = data
}

// add event listeners to buttons

window.onload = function (url = baseUrl) {
  document.querySelector('button[name="submit"]').addEventListener('click', function() {preLoad()})
  document.querySelector('button[name="savebutton"]').addEventListener('click', function() {saveFavorite(apiData)})
}

// first function to call when clicking submit button, pulls value of the date selector then calls loadIn

function preLoad() {
  let newDate = document.querySelector('input').value
  loadIn(baseUrl, newDate)
}

// asynchronous call to api

async function getData(url) {
  const response = await fetch(url)
  const obj = await response.json()
  return obj
}

// populates photo and data from an object (returned from the api) then populates HTML with that info

function populatePhoto(obj) {
  document.querySelector('main').classList.add('fade-in')
  document.querySelector('.title').innerText = `Photo of the day for ${new Date(obj.date).toDateString()}: ${obj.title}`
  document.querySelector('.author').innerText = `Photo by ${obj.copyright}`
  document.querySelector('.information').innerText = obj.explanation
  if(obj.media_type === 'image') {
    document.querySelector('img').src = obj.hdurl
  }
  saveHistory(obj)
}

// saves date of the passed object's date property to localstorage. boolean value signifies if has been marked a favorite by user

function saveHistory(obj) {
  let currentHistory = localStorage.getItem(obj.date)
  if (currentHistory === null) {
    localStorage.setItem(obj.date, 'false')
  }
}

// changes boolean value of key in localstorage to true, signifying it's marked as a favorite

function saveFavorite(obj) {
  localStorage.setItem(obj.date, 'true')
  // document.querySelector('button[name="savebutton"]').innerText = 'Remove Photo From Favorites'
}

// load history and display it in the history section
function loadHistory() {
  let iteratorArray = [...new Array(localStorage.length)].forEach((c, i) => {
    const newLi = document.createElement('li')
    newLi.innerText = localStorage.key(i)
    console.log(i, newLi.innerText)
    const existingUl = document.querySelector('.history')
    existingUl.append(newLi)
  }
  )
}

// check for true in localstorage and display it in favorites section

function loadFavorites() {

}