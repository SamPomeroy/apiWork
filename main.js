const dogUrl = 'https://dog.ceo/api/breeds/image/random'
const weatherUrl = 'https://api.open-meteo.com/v1/forecast?latitude=36.1659&longitude=-86.7844&current=temperature_2m&temperature_unit=fahrenheit&current=weather_code,wind_speed_10m,wind_direction_10m&wind_speed_unit=mph'
const button = document.querySelector('.btn')
const image = document.querySelector('img')

button.addEventListener('click', (event)=>{
    console.log('button pushed')
    event.preventDefault()
  fetch(dogUrl)
  .then((response)=>{
    console.log('response received')
    return response.json()
  })
  .then((object)=>{
    console.log('response processed')
    console.log(object.message)
    image.src = object.message
    console.log(object)
  })

})
