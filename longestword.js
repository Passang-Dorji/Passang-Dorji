function findlongestword (word){
var sentence = word.split(" ")
var max =""
for( var i=0;i<sentence.length;i++){
   if(sentence[i].length > max.length){
    max= sentence[i]
 }
 } return max 
}
// console.log(max)

console.log(findlongestword("i am passang"))

// var sentence = "Hi Karma Namgay Dorji";
// var sentenceIntoWords = sentence.split(" ");
// var max = sentenceIntoWords[0];
// for (var i = 1; i < sentenceIntoWords.length; i++) {
//     if (sentenceIntoWords[i].length > max.length) {
//         max = sentenceIntoWords[i];
//     }
// }
// console.log(max);