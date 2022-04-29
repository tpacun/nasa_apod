//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=8chDM5TyNYtiZItHmQXpukw3SIpAkUaQei3KefuR&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('h3').innerText = data.explanation
        console.log(data)
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

