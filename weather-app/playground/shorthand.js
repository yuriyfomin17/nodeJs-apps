const name = 'Yuriy'
const userAge = '22'

const user = {
    name,
    age: userAge,
    location: 'London'
}
console.log(user)
// Object destructuring
const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

const transaction = ( {label, stock})=>{
    console.log(label, stock)
}
transaction(product)

