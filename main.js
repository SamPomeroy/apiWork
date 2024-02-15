const dogUrl = 'https://dog.ceo/api/breeds/image/random'
const weatherUrl = 'https://api.open-meteo.com/v1/forecast?latitude=36.1659&longitude=-86.7844&current=temperature_2m&temperature_unit=fahrenheit&current=weather_code,wind_speed_10m,wind_direction_10m&wind_speed_unit=mph'
const dogButton = document.querySelector('#dogButton')
const dogImage = document.querySelector('img')
const weatherButton = document.querySelector('#weatherButton')
let longBox = document.querySelector('#longitude')
let latBox = document.querySelector('#latitude')


dogButton.addEventListener('click', (event)=>{
    console.log('dog button pushed')
    event.preventDefault()
  fetch(dogUrl)
  .then((response)=>{
    console.log('response received')
    return response.json()
  })
  .then((object)=>{
    console.log('response processed')
    console.log(object.message)
    dogImage.src = object.message
    console.log(object)
  })

})

weatherButton.addEventListener('click', ()=>{
const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latBox.value}&longitude=${longBox.value}&current=temperature_2m&temperature_unit=fahrenheit&current=weather_code,wind_speed_10m,wind_direction_10m&wind_speed_unit=mph`
console.log('weather button pushed')
fetch(weatherUrl)
.then((response)=>{
    console.log('request received')
    // console.log(response.json())
    return response.json()
})
.then((object)=>{
    console.log('request processed')
    console.log(object)

 let temperature = document.querySelector('.temperature') 
 let wind = document.querySelector('.wind')  
 let description = document.querySelector('.description')

 temperature.innerHTML = object.current.temperature_2m
 wind.innerHTML = object.current.wind_speed_10m
 description.innerHTML = object.current.weather_code

 console.log(object)
})
.catch((error)=>console.log(error))
})
