const y = new Date()
let rYear = y.getFullYear()
const m = new Date()
let rMonth = m.getMonth() + 1

let askName = () => {
    let prenom = "Bonjour "+ prompt("Salut, quel est ton pr\u00e9nom ?") + " !"
    document.body.innerHTML += '<h2><span id="prenom"></span></h2>'
    document.getElementById("prenom").innerHTML=prenom
}

let askYearOfBirth = () => {
    let year = ("Vous avez " + (rYear - prompt("Quelle est ton ann\u00e9e de naissance ?"))+ " ans et ")
    let month = ((rMonth - prompt("Et ton mois de naissance ?")) + " mois")
    let age = year + month
    document.body.innerHTML += '<h3><span id="age"></span></h3>'
    document.getElementById("age").innerHTML=age
}



askName()
askYearOfBirth()




