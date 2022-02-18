const firstName = "Berkcan"
const lastName = "Gümüşışık"
const age = 22
val = firstName + " " + lastName
console.log(val)

val = "Berkcan"
val += " Gümüşışık"

console.log(val)


val = "Benim adım " + firstName + " " + lastName + " ve yaşım " + age
console.log(val)

val = firstName.concat(" " , lastName)
console.log(val)
/*
concat() String dizgesi ile belirtilen yazı yada yazıları birleştirip yeni bir yazı üretir.

*/

val = val.length
console.log(val)

// lenght string uzunluğunu verir.

val = firstName.toLowerCase(); //tüm stringi küçültür
console.log(val)

val = firstName.toUpperCase(); //tüm stringi büyültür
console.log(val)

//indexof() bulduğu ilk karakterin indeksini verir.

val =firstName.indexOf("a")
console.log(val)

//substring() belli karakterden belli bir karaktere kadar almayı sağlar.

val = firstName.substring(2,3)
console.log(val)

//slice() belli karakterden belli bir karaktere kadar almaı sağlar.

val = firstName.slice(2)
console.log(val)

val = firstName[2]
console.log(val)

//replace() karakter değiştirmeyi sağlar.

val = firstName.replace("Berkcan","BERKCAN")
console.log(val)

//trim() Dizgenin başındaki ve sonundaki boşlukları kırpar.
let yazi = "     deneme        "
val = yazi.trim()
console.log(val)

//split() belirtilen parametreye göre string dizgesini parçalayıp bu dizgeden yeni bir dizi oluşturur
let hobies = "sinema,spor,kitap"
val = hobies.split(",")
console.log(val)