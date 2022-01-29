function api(){
    var city = document.getElementById("input").value;
    var result = document.getElementById("p1");
var add = "ºC";
    var first = "https://api.openweathermap.org/data/2.5/weather?q=";
    var second =  "&units=metric&appid=---WRITE YOUR API KEY HERE---";
    var url = first + city + second;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const { main, name, sys, weather } = data;
        result.innerHTML = Math.round(main.temp) + add;
    })
}
