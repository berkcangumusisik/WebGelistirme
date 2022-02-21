/**
 * Javascript'te stringlerin daha güzel durmasını sağlar.
 * `` içerisinde ${degiskenAdi} yazılarak kullanılır. 
 */

const fullName = "Berkcan Gümüşışık"
const city = "Ankara"
const yearOfBirth = 1999

let val = "Benim adım " + fullName + "\nBen " + (2022-yearOfBirth) + " yaşındayım\n" + city + "'da yaşıyorum."
console.log(val) 

console.log(`Ben ${fullName}\nBen ${(2022-yearOfBirth)} yaşındayım.\n${city}'da yaşıyorum.`)

let html = "<ul>"+
           "<li>" + fullName + "</li>"+
           "<li>" + (2022-yearOfBirth) + "</li>"+
           "<li>" + city + "</li>"+
           "</ul>"
document.body.innerHTML = html

/*
let html = `<ul>
            <li>${fullName}</li>
            <li>${(2022-yearOfBirth)}</li>
            <li>${city}</li>
            </ul>
           `
*/