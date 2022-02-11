//Aritmetik Operatörler
/**
 * + : Toplama
 * - : çıkarma
 * * : çarpma
 * / : bölme
 * % : mod alma
 * 
 */
let value 
const a = 10
const b = 20
let c = 3

value = a + b
console.log(value)
console.log(typeof value)


value = a - b
console.log(value)
console.log(typeof value)

value = a * b
console.log(value)
console.log(typeof value)

value = a / b
console.log(value)
console.log(typeof value)

value = a / 0 // Bunun sonucu Infinity döner.
console.log(value)
console.log(typeof value)


value = a % b
console.log(value)
console.log(typeof value)

value = c ++ //c sayısını 1 artır 
console.log(c)
console.log(value)

value = ++c 
console.log(c)
console.log(value)

value = --c 
console.log(c)
console.log(value)

value = c -- //c sayısını 1 azalt 
console.log(c)
console.log(value)

value += a // value = value + a
console.log(value)

value -= a // value = value - a
console.log(value)

value *= a // value = value * a
console.log(value)

value /= a // value = value / a
console.log(value)

value %= a // value = value % a
console.log(value)


/*
Math Objesi Metotları
*/

console.log(Math.PI) // pi sayını verir.
console.log(Math.E) // E sayısını verir.
console.log(Math.round(5.3))
console.log(Math.round(5.7))
// .round => .5'ten küçükse aşağı, .5'ten büyükse yukarı yuvarlar.

console.log(Math.ceil(5.2))
console.log(Math.ceil(5.7))
// . ceil => yukarı yuvarlar.

console.log(Math.floor(5.2))
console.log(Math.floor(5.7))
// . floor => aşağı yuvarlar.

console.log(Math.sqrt(16))
console.log(Math.sqrt(4))
//.sqrt => karekök alır.

console.log(Math.abs(-16))
console.log(Math.abs(-4))
//.abs => mutlak değerini alır.

console.log(Math.pow(2,4))
console.log(Math.pow(3,4))
//.pow => üs alır.

console.log(Math.max(10,-1,100,32))
console.log(Math.min(10,-1,100,32))

console.log(Math.random()) // 0 - 1 arasında rasgele sayı üretir.

console.log(Math.floor(Math.random()*20 + 1))