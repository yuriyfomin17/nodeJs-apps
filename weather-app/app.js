const geoCode = require('./utils/geoCode')

const address = process.argv[2]
if (!address) {
    console.log("Please Provide Address!")
} else {
    geoCode.geoCode(address.trim(), (error, data) => {
        if (error) {
            return console.log(error)
        }

        geoCode.getWeather({latitude: data.latitude, longitude: data.longitude}, (Error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log(
                data.location + " has " +
                forecastData.overcast + " weather" +
                ". It is currently " +
                forecastData.temperature +
                " degrees out. It feels like " +
                forecastData.feelsLike)

        })
    })

}





