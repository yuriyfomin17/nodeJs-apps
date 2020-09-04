const fs = require('fs')
// const book = {
//     title:"Ego is the Enemy",
//     author: "Ryan Holiday"
// }
// const bookJson = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJson)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJson = dataBuffer.toString()
// const data = JSON.parse(dataJson)
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJson = dataBuffer.toString()
const data = JSON.parse(dataJson)
data.name = "Yuriy Fomin"
data.age = "22"

const infoData = JSON.stringify(data)
fs.writeFileSync('1-json.json', infoData)

