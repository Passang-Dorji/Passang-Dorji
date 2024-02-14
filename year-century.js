// function yearToCentury(year) {
//     var century = year / 100;
//     if (year % 100 === 0) {
//         return century;
//     } else {
//         return Math.floor(century) + 1;
//     }
// }
// console.log(yearToCentury(2024));



// var rl=require("readline-sync")
// const year =Number(rl.question("give me year?"))
//  function yeartocentury (year){ 
//     var century = year / 100;
//     if (year % 100 === 0) {
//          return century;
//     } else {
//         return Math.floor(century) + 1;
//     }
// }
// var c = yeartocentury(year)
// console.log("the century of the "+year+" is "+c+" century")

function getFromYear(year) {
	const century = Math.ceil(year / 100)
	var suffix = "th"
	if (century % 100 >= 10 && century % 100 <= 20) {
		suffix = "th"
	} else if (century % 10 === 1) {
		suffix = "st"
	} else if (century % 10 === 2) {
		suffix = "nd"
	} else if (century % 10 === 3) {
		suffix = "rd"
	}

	return century + suffix + " century"
}

console.log(getFromYear(1616)) // 17th