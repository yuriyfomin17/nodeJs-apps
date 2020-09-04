const geoCode = require('./utils/geoCode')

console.log(process.argv )

geoCode.geoCode(process.argv[2].trim(), (error, data) => {
    if (error) {
        return console.log(error)
    }

    geoCode.getWeather({latitude: data.latitude, longitude: data.longitude}, (Error, forecastData) => {
        if (error) {
            return console.log(error)
        }
        console.log(
            data.location + " has " +
            forecastData.overcast+" weather" +
            ". It is currently " +
            forecastData.temperature +
            " degrees out. It feels like " +
            forecastData.feelsLike)

    })
})



