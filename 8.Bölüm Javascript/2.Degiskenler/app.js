
// var ile değişken tanımlama
/**
 * Değişkene değer atanmazsa undefined değer döndürür.
 * Değişken değerini değişken oluşturduğumuz yerde ya da daha sonra verebiliriz.
 * Değişken aynı isimle tekrar oluşturulabilir.
 */
var a 
console.log(a)
a = 20
console.log(a)

var name = "Berkcan"
console.log(name)
var name = "Ahmet"
console.log(name)


// let ile değişken oluşturma
/**
 * let ile aynı değişken tekrar tanımlanamaz.
 * 
 */

let name2 = "Berkcan"
console.log(name2)
let x,y
x = 10 
y = 20
console.log(x+y)


// const ile değişken tanımlama 
/**
 * Tanımlandığı gibi kalır. bir daha değiştirmek mümkün değildir.
 * Ayrıca şu şekilde kullanımı mümkün değildir:
 const a
 a = 10
 * Yalnızca listelerde .push metoduyla veri eklemek mümkündür.
 */

 const z = [1,2,3,4,5]
 console.log(z)
 z.push(6)
 console.log(z)

/**
 Değişken Tanımlama kuralları
 * Sayısal ifadeyle başlayamaz.
 * Komut isimleriyle tanımlanamaz.
 * Birden fazla kelime varsa ya camelCase adlandırma yapılır ya da _ kullanılır. Ama boşluk kullanılamaz.
 * Büyük küçük harf duyarlılığı olduğu için dikkat et.
 */


/* 
Veri Türleri
Pritive Veri Türleri
* Number => sayısal ifadeler için kullanılır. Tırnak içinde yazılmaz.
* string => metinsel ifadelerdir. Tırnak içinde yazılır.
* boolean => true ya da false değer döndürür.
* null => boş bir veri taşıdığını söyler.
* undefined => tanımlanmamış değer.
*/

let m = 10
console.log(typeof m)
m = 3.14
console.log(typeof m)

let firstName = "Berkcan"
console.log(firstName)
console.log(typeof firstName)

let dogruMu = true
console.log(dogruMu)

let s = null
console.log(s)
console.log(typeof s)