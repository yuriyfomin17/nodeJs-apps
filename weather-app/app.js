const geoCode = require('./utils/geoCode')


geoCode.geoCode("London ", (error, data) => {
    geoCode.getWeather({latitude: data.latitude, longitude: data.longitude}, (Error, Data) => {
        console.log(Data.overcast + ". It is currently " + Data.temperature + " degrees out. It feels like " + Data.feelsLike)

    })
})



