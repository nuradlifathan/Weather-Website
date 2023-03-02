const container = document.querySelector(".container")
const search = document.querySelector(".search-box button")
const weatherBox = document.querySelector(".weather-box")
const weatherDetails = document.querySelector(".weather-details")
const notFound = document.querySelector(".not-found")

search.addEventListener("click", () => {
  const APIkey = "dcb7dad3f3d4e95de47920c688f32f37"
  const kota = document.querySelector(".search-box input").value

  if (kota === "") return

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${kota}&units=metric&appid=${APIkey}`
  )
    .then((response) => response.json())
    .then((json) => {
      if (json.cod === "404") {
        container.style.height = "400px"

        weatherBox.style.display = "none"
        weatherDetails.style.display = "none"

        notFound.style.display = "block"
        notFound.classList.add("fadeIn")

        return
      }
      notFound.style.display = "none"
      notFound.classList.remove("fadeIn")

      const image = document.querySelector(".weather-box img")
      const temperature = document.querySelector(".weather-box .temperature")
      const description = document.querySelector(".weather-box .description")
      const humidity = document.querySelector(".weather-details .humidity span")
      const wind = document.querySelector(".weather-details .wind span")

      switch (json.weather[0].main) {
        case "Clear":
          image.src = "images/clear.png"
          break

        case "Rain":
          image.src = "images/rain.png"
          break

        case "Snow":
          image.src = "images/snow.png"
          break

        case "Clouds":
          image.src = "images/cloud.png"
          break

        case "Haze":
          image.src = "images/mist.png"
          break

        default:
          image.src = ""
      }

      temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`
      description.innerHTML = `${json.weather[0].description}`
      humidity.innerHTML = `${json.main.humidity}%`
      wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`

      weatherBox.style.display = ""
      weatherDetails.style.display = ""
      weatherBox.classList.add("fadeIn")
      weatherDetails.classList.add("fadeIn")

      container.style.height = "590px"
    })
})
