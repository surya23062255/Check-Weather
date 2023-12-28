async function fetchData() {
  let city = document.getElementById("cityName").value;

  const weatherData = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ce9a070c37c337e0dca450364a3f6193&units=metric`
  );

  const jsonData = await weatherData.json();

  let num = jsonData.main.temp;
  let temprature = Math.floor(num);

  document.getElementById("city-name").innerHTML = city.toUpperCase();
  
  document.getElementById("temp").innerHTML = temprature + ` &#8451`;

  document.getElementById("humid").innerHTML = jsonData.main.humidity + "%";

  document.getElementById("wind").innerHTML = jsonData.wind.speed + " Km/h";

  document.getElementById("visibility").innerHTML = jsonData.visibility / 1000 + "Km";

  document.getElementById("cityName").value = "";

  //   For Temperature Image
  let imageContainer = document.getElementById("temp-img");

  if (temprature <= 10) {
    imageContainer.src = "./cold.png";
    imageContainer.height = 60;
    imageContainer.width = 60;
  } else if (temprature < 25 && temprature > 10) {
    imageContainer.src = "./normal.png";
    imageContainer.height = 60;
    imageContainer.width = 60;
  } else if (temprature > 25) {
    imageContainer.src = "./hot.png";
    imageContainer.height = 60;
    imageContainer.width = 60;
  }

  //   For Humidity Image
  let humidImg = document.getElementById("humidity");
  humidImg.src = "./humidity.png";
  humidImg.height = 60;
  humidImg.width = 60;

  //   For Wind Image
  let windImg = document.getElementById("wind-img");
  windImg.src = "./wind.png";
  windImg.height = 60;
  windImg.width = 60;

  //   For Visibility Image
  let visibleImg = document.getElementById("visible-img");
  visibleImg.src = "./view.png";
  visibleImg.height = 60;
  visibleImg.width = 60;

}