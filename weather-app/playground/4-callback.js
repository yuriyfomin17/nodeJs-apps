// setTimeout(() => {
//     console.log("Two seconds are up")
// }, 2000)
//
// const names = ['Yuriy', 'Elena', 'Inna']
// const shortNames = names.filter((name) => {
//     return name.length <= 4
// })
//
// console.log(shortNames)
//
// const geoCode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0,
//         }
//         callback(data)
//     }, 2000)
// }
//
// geoCode('London', (data)=>{
//     console.log(data)
// })


const add = (number1, number2, sum)=>{
    setTimeout(()=>{

        sum(number1 + number2)
    }, 2000)
}
add(1,4,(sum)=>{
    console.log(sum)
})
