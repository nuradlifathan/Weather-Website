const container = document.querySelector(".container")
const search = document.querySelector(".search-card button")
const weatherBox = document.querySelector(".weather-box")
const weatherDetails = document.querySelector(".weather-details")
const notFound = document.querySelector(".404")

search.addEventListener("click", () => {
  const APIkey = "dcb7dad3f3d4e95de47920c688f32f37"
  const kota = document.querySelector(".search-card input").value

  if (kota === "") return

  fetch(
    `https://api.openweathermap.org/data/3.0/weather?q=${kota}&units=metric&appid=${APIkey}`
  )
    .then((response) => response.json())
    .then((json) => {
      if (json.cod === "404") {
        container.style.height = "400px"

        weatherBox.style.display = "none"
        weatherDetails.style.display = "none"

        notFound.style.display = "block"
        notFound.style.classList.add("fadeIn")

        return
      }
      notFound.style.display = "none"
      notFound.classList.remove("fadeIn")

      const image = document.querySelector(".weather-box img")
      const temperature = document.querySelector(".weather-box .temperature")
      const description = document.querySelector(".weather-box .description")
      const humidity = document.querySelector(".weather-details .humidity span")
    })
})
