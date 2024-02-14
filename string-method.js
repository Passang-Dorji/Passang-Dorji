// var result= "passag came right now".split("")// split into letter
// console.log(result)

// var result= "passag came right now".split(" ")// split into words
// var result="banana74".includes("banana")
//  console.log(result)

// var result = "Tom is at his computer.".split("")
// const restrictedWords = ["banana", "orange", "apple", "peach", "grape"]

// function checkUsername(username) {
// 	var isUserNameOk = true

// 	for (var i = 0; i < restrictedWords.length; i += 1) {
// 		var includesRestrictedWord = username.includes(restrictedWords[i])
// 		if (includesRestrictedWord) {
// 			isUserNameOk = false
// 		}
// 	}

// 	return isUserNameOk
// }

// console.log(checkUsername("mike45")) // true
// console.log(checkUsername("apple45")) // false

// var result = "john james jones".toLocaleUpperCase()
// console.log(result)
    // var split = "john james jones".split(" ")
    // var name=
    // console.log(split)
    
    
    var result = "john james jones";
    
    // var capitalise = result.replace(/(^|\s)[a-z]/g, (x => x.toLocalUpperCase()))
   
    // // Split the string into an array of words
    // var words = result.split(" ");
    // // Capitalize the first letter of each word
    // for (var i = 0; i < words.length; i++) {
    //     words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    // }
    // // Join the words back together into a single string
    // var capitalizedResult = words.join(" ");
    // console.log(capitalizedResult);
    

// classwork
    var splitIntoWords = result.split(" ")

for (var i = 0; i < splitIntoWords.length; i += 1) {
	var currentWord = splitIntoWords[i]
	var lettersOfCurrentWord = currentWord.split("")
	var capitalizedLetter = lettersOfCurrentWord[0].toLocaleUpperCase()
	lettersOfCurrentWord[0] = capitalizedLetter
	var capitalizedWord = lettersOfCurrentWord.join("")
	splitIntoWords[i] = capitalizedWord
}
const capitalizedName = splitIntoWords.join(" ")
console.log(capitalizedName)
    