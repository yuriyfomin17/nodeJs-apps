const request = require('request')

// const url ='http://api.weatherstack.com/current?access_key=b42e0cd596e27ea3bfc193a814187784&query=37.8267,%20- 122.4233'
// request({url: url, json: true}, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degrees out. It feels like " + response.body.current.feelslike)
//     }
//     // console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degrees out. It feels like " + response.body.current.feelslike)
// })

// Geocoding
// Address => Lat/Long => Weather

// const geoCodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoibmltb2Z5MTciLCJhIjoiY2tlbnpncTU0MjNlYTJxbnAxZ3g5YnZ0aSJ9.2jHw8Iesica3uVt9mH2UOw&limit=1'
//
// request({url:geoCode, json:true}, (error, response)=>{
//     if(error){
//         console.log('Unable to connect to Geocoding app')
//     }else if(response.body.features.length===undefined){
//         console.log('Unable to find location')
//     }else{
//
//         console.log("Latitude: ", response.body.features[0].geometry.coordinates[0])
//         console.log("Longitude: ", response.body.features[0].geometry.coordinates[1])
//     }
// })

const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoibmltb2Z5MTciLCJhIjoiY2tlbnpncTU0MjNlYTJxbnAxZ3g5YnZ0aSJ9.2jHw8Iesica3uVt9mH2UOw&limit=1'
    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to location service!', undefined)
        } else if (response.body.features.length === undefined) {
            callback('Unable to find location. Try another Search', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].geometry.coordinates[0],
                longitude: response.body.features[0].geometry.coordinates[1],
                location: response.body.features[0].text
            })
        }
    })

}
const getWeather = (latLongAddress, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=b42e0cd596e27ea3bfc193a814187784&query=' + latLongAddress.longitude + ', ' + latLongAddress.latitude
    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback("Unable to connect to weather service!", undefined)
        } else if (response.body.error) {
            console.log("Unable to find location")
        } else {
            callback(undefined, {
                location:response.body.location.name,
                overcast: response.body.current.weather_descriptions[0].toLowerCase(),
                temperature: response.body.current.temperature,
                feelsLike: response.body.current.feelslike
            })
        }
    })
}
module.exports = {
    getWeather:getWeather,
    geoCode:geoCode
}


