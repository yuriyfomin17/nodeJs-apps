const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=b42e0cd596e27ea3bfc193a814187784/40,-75'

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })
    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })


})

request.on('error', (error)=>{
    console.log('An error', error)
})
request.end()