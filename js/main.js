const selectedDate = document.querySelector('input').value
const baseUrl = `https://api.nasa.gov/planetary/apod?api_key=8chDM5TyNYtiZItHmQXpukw3SIpAkUaQei3KefuR`
const date = new Date();
let todayDate = `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`

async function loadIn() {
  let data = await getData(baseUrl)
  saveHistory(data)
  populatePhoto(data)
  return data
}

let data = loadIn();

// document.querySelector('submit').addEventListener('click', getFetch)
document.querySelector('button[name="savebutton"]').addEventListener('click', function() {saveFavorite(data)})

async function getData(url) {
  const response = await fetch(url)
  const obj = await response.json()
  return obj
}

function populatePhoto(obj) {
  document.querySelector('main').classList.add('fade-in')
  document.querySelector('.title').innerText = `Photo of the day for ${obj.date}`
  document.querySelector('.photoTitle').innerText = obj.title
  document.querySelector('.author').innerText = obj.copyright
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


// function getFetch(){
//   const choice = document.querySelector('input').value
//   const url = `https://api.nasa.gov/planetary/apod?api_key=8chDM5TyNYtiZItHmQXpukw3SIpAkUaQei3KefuR&date=${choice}`

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         document.querySelector('main').classList.add('fade-in')
//         document.querySelector('.title').innerText = `Photo of the day for ${data.date}`
//         document.querySelector('.photoTitle').innerText = data.title
//         document.querySelector('.author').innerText = data.copyright
//         document.querySelector('.information').innerText = data.explanation
//         if(data.media_type === 'image') {
//           document.querySelector('img').src = data.hdurl
//         }
//         else if (data.media_type === 'video') {
//           document.querySelector('iframe').src = data.url
//         }
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }