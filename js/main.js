const baseUrl = `https://api.nasa.gov/planetary/apod?api_key=8chDM5TyNYtiZItHmQXpukw3SIpAkUaQei3KefuR`
const date = new Date();
let todayDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
let apiData;
loadIn(baseUrl, todayDate)


async function loadIn(url, selectedDate=todayDate) {
  let data = await getData(`${url}&date=${selectedDate}`)
  saveHistory(data)
  populatePhoto(data)
  apiData = data
}

window.onload = function (url = baseUrl) {
  document.querySelector('button[name="submit"]').addEventListener('click', function() {preLoad()})
  document.querySelector('button[name="savebutton"]').addEventListener('click', function() {saveFavorite(apiData)})
}

function preLoad() {
  let newDate = document.querySelector('input').value
  loadIn(baseUrl, newDate)
}

async function getData(url) {
  const response = await fetch(url)
  const obj = await response.json()
  return obj
}

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

function saveHistory(obj) {
  let currentHistory = localStorage.getItem(obj.date)
  if (currentHistory === null) {
    localStorage.setItem(obj.date, 'false')
  }
}

function saveFavorite(obj) {
  localStorage.setItem(obj.date, 'true')
}