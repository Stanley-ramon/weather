




const key = "95015cff1d7bea613144c4393e7577a1"

function dadosonscreen (dados) {
    console.log(dados)

     document.querySelector(".container-weather__city").innerHTML = " Tempo em " + dados.name
     document.querySelector(".container-weather__temp").innerHTML = Math.floor(dados.main.temp) + "°C"
     document.querySelector(".prevision-text").innerHTML = dados.weather[0].description
     document.querySelector(".dampness").innerHTML = " umidade " + dados.main.humidity + "%"
     document.querySelector(".img-prevision").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}

async function searchcity (city) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then( response => response.json())
 
    dadosonscreen(dados)
}

function clickonbutton () {

     const city = document.querySelector(".input-city").value

    searchcity(city)
}