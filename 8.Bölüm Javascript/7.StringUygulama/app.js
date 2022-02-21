let sentence = "  Template Literals or template strings is the ability Have multi-line strings without any funny business. ";

let url = "http://sadikturan.com/Modern Javascipt KURSU sıfırdan ileri seviye ü ö ş";

// cümle kaç karakterlidir ?
console.log(sentence.length)
// kaç kelimeden oluşuyor ?
console.log(sentence.split(" "))
// Tüm cümleyi küçük harfe çevirin.
console.log(sentence.toLowerCase())
// Cümlenin başındaki ve sonundaki boşlukları siliniz.
console.log(sentence.trim())
// '-' karakterini silin.
console.log(sentence.replace("-",""))

// url'nin içinden str kısmını çıkarınız.
let str = "http://"
console.log(url.substr(str.length))
console.log(url.slice(str.length))

// url hangi protocol'u kullanmaktadır ? (http,https)
console.log(url.startsWith('http'))
console.log(url.startsWith('https'))

// url, '.com' ifadesini içeriyor mu?
console.log(url.indexOf('.com'))
console.log(url.includes('.com'))

// url string ifadesini geçerli bir url olarak düzenleyiniz.

console.log(url.toLowerCase()
            .replace(/ /g,"-")
            .replace("ü","u")
            .replace("ı","i")
            .replace("ö","o")
            .replace("ş","s")
            .replace("ç","c")
            
);