const geoCode = require('./utils/geoCode')




geoCode("London ", (error, data) => {
    console.log('Error', error)
    console.log('Data', data)

})

