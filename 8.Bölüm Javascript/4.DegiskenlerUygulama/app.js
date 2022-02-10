// ** Bir müşterinin aşağıdaki bilgileri için değişken oluşturunuz.

// ** Müşteri adı
// ** Müşteri soyadı
// ** Müşteri tc kimlik
// ** Müşteri sipariş toplamı
// ** Müşteri cinsiyet
// ** Müşteri adres bilgisi
// ** Müşteri hobiler

let customerName = 'Berkcan'
let customerLastName = 'Gümüşışık'

let fullName = 'Berkcan Gümüşışık'
let musteriId = '1322323232'

let total = 205.6
let gender = true // erkek true, kadın false

// object
let address ={
    city : 'Ankara',
    district : 'Sincan',
    body : 'Selçuklu Mahallesi'
}

// array
let hobbies = ['Sinema','Kitap','Spor']


// ** Aşağıdaki siparişlerin toplamını hesaplayınız.

let order1=Number('100')
let order2=Number('150')

let totalOrder = order1 + order2
console.log(totalOrder)

// ** Aşağıdaki siparişlerin toplamını hesaplayınız.

let order3=Number('100.2')
let order4=Number('150.5')

let totalOrder2 = order3 + order4
console.log(totalOrder2)

// ** Aşağıdaki siparişlerin toplamını tam sayı olarak hesaplayınız.

let order4=parseInt('100.2')
let order5=parseInt('150.5')

let totalOrder3 = order4+order5
console.log(totalOrder3)

// ** Aşağıda verilen doğum yılına göre yaş hesaplayınız.

const yearOfBirth = 1999

console.log(new Date().getFullYear()-yearOfBirth)

// ** Aşağıdaki string ifadenin karakter sayısını bulunuz.

let course = 'Modern Javascript Kursu'
console.log(course.length)



