// let list = ["Pâtes","Oeuf","Sel","Poivre","Lardon","Oignon","Parmesan"]
// list.sort()

// for (let i=0;i<list.length;i++){
//     console.log((i+1)+". "+list[i])
// }

// let phrase = ["salut","ca","va"]
// console.log(phrase.reverse())

////// DisplayArray v1

// const displayArray = (tab) => {
//     return tab.join(" ")
// }

// console.log(displayArray(["Salut","Ca","Va","?"]))

////// DisplayArray v2

// const displayArray = (tab, option) => {
//     return tab.join(option)
// }

// console.log(displayArray(["Pomme","Banane","Poire","Cerise"]," - "))

////// SwapCase 

// str = "Salut"
// console.log(str.replace(str[2],str[2].toUpperCase()))

// const swapCase = (str) => {
// let newStr = ""
    
//     for (let i=0;i<str.length;i++) {


//         if ("A"<=str[i] && str[i]<="z"){


//             if (str[i]<"a"){
//                    newStr += str[i].toLowerCase()
                
//              }
            
//              else if (str[i]>"Z"){
//                     newStr += str[i].toUpperCase()
//              }
//             }

//         else{
//             newStr += str[i]
//         }
//         }
//         return newStr
        
//     }

// console.log(swapCase("Salut j'ai 29 ans l'AnnéE proCHAINE"))


///////////  Alphabet Soup

// const alphabetSoup = (str) => {
// let ordre = []
//         for (let i=0;i<str.length;i++){
//             ordre[i]=str[i]
//         }
// ordre.sort()
// str = ordre.join("")
// return str

// }

// console.log(alphabetSoup("vnfeinzafnzinvuvinrbgudnxissozjeunveodzidnzi"))

///////// Array Addition

// const arrayAddition = (tab) => {
//     let sum = 0
//     tab.sort(function(a, b){return b-a})
//     for(let i=1;i<tab.length;i++){
//         sum += tab[i]
//     }
//     if(tab[0]==sum){
//         return true
//     }
//     else{
//         return false
//     }
// }

// console.log(arrayAddition([1,2,3,4]))

///////// Bonus - TableMult

// const tableNum = (num) => {
// let mult = 0

// if(num<1){
//     console.log("Le nombre doit être positif")
// }
// else if(Number.isInteger(num)==false){
//     console.log("Vous devez entrer un nombre")
// }

// else{
//     for(i=1;i<=num;i++){
//         mult = i * num
//         console.log(i+" * "+num+" = "+mult)
//     }

// }
// }

// tableNum(-1)


/////// LowerUpper


// function oddOrEven(x) {
//     return ( x & 1 ) ? "odd" : "even";
//   }

// function lowerUpper(str) {
//     let tab = []
//     tab = str.split(" ")
//     for(i=0;i<tab.length;i++){
//         let word = tab[i]
//         // console.log(word)
//         let newWord = ""
//         for(y=0;y<word.length;y++)
//             if(oddOrEven(y)==="even"){
//                 // console.log(oddOrEven(y))
//                 newWord += word[y].toLowerCase()
//                 // console.log(newWord)
//             }
//             else if(oddOrEven(y)==="odd"){
//                 // console.log(oddOrEven(y))
//                 newWord += word[y].toUpperCase()
//                 // console.log(newWord)
//             }
//         tab[i]=newWord
//         // console.log(newWord)
//     }

//     str = tab.join(" ")
//     return str

// }

// console.log(lowerUpper("La ville de Paris"))

////// secondGreatLow

// const secondGreatLow = (tab) => {
//     let check = true
//     let tab2 = []
//     tab.sort(function(a, b){return a-b})

//     for (let i = 0; i<tab.length;i++){
//         if(Number.isInteger(tab[i])===false)
//             check = false
  
//     }


//     if(check===true){
//         tab2 = [(tab[1]),(tab[tab.length-2])]
//         console.log(tab2)
//     }
    
//     else{
//         console.log("ERROR")
//     }


// }
   


// secondGreatLow([-12,-12,-12])

///////  ExoArbreBranche2 BubbleSort

// const bubbleSort = (list) => {
    
//     for(let y=0;y<list.length;y++){
//         let tempValue = 0
//         let largest = 0
//         let positionLargest = 0
        
//         for (let i = y;i<list.length;i++){
            
//             if(list[i]>largest){
//                 largest = list[i]
//                 positionLargest=i
//             }
                
        
//         }

//         tempValue=list[y]
//         list[y]=largest
//         list[positionLargest]=tempValue
//     }
        
// return list
// }

// console.log(bubbleSort([2, 54, 7, 38, 22, 13, 19, 45, 31, 77, 98, 5, 12, 28, 81, 26, 72, 4, 20, 42]))

//// Dictionnaire

// const createDico = (list1,list2) => {
//     let dictionnaire = new Object()
//     for (let i = 0; i<list1.length;i++){
//         dictionnaire[list1[i]]=list2[i]
//     }
// return dictionnaire

// }


// console.log(createDico(["4","3","zebre","gorge","0"],["quatre","trois","deux","un","zero"]))


/////// Bonus - Doop

const doop = (tab) => {
    let resultat = 0
    let check1 = false
        if (Number.isInteger(tab[0]) && Number.isInteger(tab[2]) === true){
            check1 = true
            console.log(check1)
        }
    let check2 = false
        if (tab[1]=="*" || tab[1]=="-" || tab[1]=="/" || tab[1]=="%" || tab[1]=="+"){
            check2 = true
            console.log(check2)
        }

    switch(tab[1]){
        case '*' :
            resultat = tab[0]*tab[2];
            break;
        case '-':
            resultat = tab[0]-tab[2];
            break;
        case '%':
            resultat = tab[0]%tab[2];
            break;
        case '+':
            resultat = tab[0]+tab[2];
            console.log("addition")
            break;
    }
    
    return resultat
}

console.log(doop([5,"-",3]))

