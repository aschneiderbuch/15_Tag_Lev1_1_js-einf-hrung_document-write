let myText = "Hello again"
console.log(myText)

document.write(myText)

document.write(`<h2>${myText}</h2>`)

document.getElementById("antwort").innerHTML = myText

let vorname = "Horst"
let nachname = "Hubert"
console.log(vorname+ " " + nachname)

document.write(vorname + " " + nachname)

document.write(`<h2>${ vorname + " " + nachname} hallo ${nachname} </h2>`)

document.getElementById("idVorname").innerHTML = vorname + " " + nachname


function myFunction(){
    document.write(myText)
    console.log("Button wurde gedrückt: Inhalt = " + myText)
}
console.log(myText)