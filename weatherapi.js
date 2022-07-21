//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={64e1a54af35fc47bdafa5f1d6619ae1d}


async function getWeatherData(){
    var cityName = document.getElementById('cityName').value 
    console.log(cityName)
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=64e1a54af35fc47bdafa5f1d6619ae1d`)
    let res = await data.json()
    console.log(res)


var weatherContainer = document.getElementById('weatherContainer')
weatherContainer.innerHTML=`<div class="row g-0">
<div class="col-md-4">
  <img src="https://media.istockphoto.com/vectors/vectot-weather-widget-for-smartphone-vector-id475696742?k=6&m=475696742&s=612x612&w=0&h=UFFoG4LnltIDFv3PSvGAQPV8CPHpoqTkZsgs8QDas0Q=" class="img-fluid rounded-start" alt="...">
</div>
<div class="col-md-8">
  <div class="card-body">
    <h5 class="card-title">Weather Data ${cityName} </h5>
    <p class="card-text"><small class="text-muted">Temperature:${res.main.temp}</small></p>
    <p class="card-text"><small class="text-muted">Weatherid:${res.weather[0].id}</small></p>
    <p class="card-text"><small class="text-muted">Humidity:${res.main.humidity}</small></p>
  </div>
</div>
</div>`
}
