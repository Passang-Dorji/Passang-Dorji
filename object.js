// const person={
//     name:"passang",
//     age : 23,
//     occupation: " farmar",
//     hobby: " ball"
// }
// console.log(person.name)


// function removevowol(somestring){
//     const vowol=("aeiou")
//     var result=[]
//     var string=somestring.toLowerCase().split("")
//     for (var i=0;i< string.length;i++){
//         if(!vowol.includes(string[i])){
//             result.push(string[i])
//         }
        
//     }return result.join("")
// }
// console.log(removevowol("hello guys"))

function removeVowels(str) {
    return str.replace(/[aeiouAEIOU]/g, ''); // g is for global match, removing all occurrences
}

var stringWithoutVowels = removeVowels("Hello World");
console.log(stringWithoutVowels); // Output: "Hll Wrld"
