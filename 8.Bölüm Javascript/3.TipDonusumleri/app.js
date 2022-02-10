let value
// Veri tiplerini string'e çevirme
value = String(123)
console.log(value)
console.log(typeof value)

value = String(true)
console.log(value)
console.log(typeof value)

value = String(false)
console.log(value)
console.log(typeof value)

value = (10).toString()
console.log(value)
console.log(typeof value)


//Veri tiplerini sayılara çevirme
value = Number("123")
console.log(value)
console.log(typeof value)

value = Number(null)
console.log(value)
console.log(typeof value)

value = parseFloat("3.14")
console.log(value)
console.log(typeof value)

value = parseInt("3")
console.log(value)
console.log(typeof value)

// string + number = string toplamaya çevirir
const h = "Hello" + 06
console.log(h)
console.log(typeof h)