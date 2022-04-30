document.querySelector('button[name="submit"]').addEventListener('click', getFetch)
document.querySelector('button[name="savebutton"]').addEventListener('click', savePhoto)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=8chDM5TyNYtiZItHmQXpukw3SIpAkUaQei3KefuR&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('main').classList.add('fade-in')
        document.querySelector('.title').innerText = `Photo of the day for ${data.date}`
        document.querySelector('.photoTitle').innerText = data.title
        document.querySelector('.author').innerText = data.copyright
        document.querySelector('.information').innerText = data.explanation
        if(data.media_type === 'image') {
          document.querySelector('img').src = data.hdurl
        }
        else if (data.media_type === 'video') {
          document.querySelector('iframe').src = data.url
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function savePhoto() {
  console.log(data.hdurl)
}

