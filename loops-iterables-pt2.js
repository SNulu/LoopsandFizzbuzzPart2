// PART 0: Write a function called squareDance() that squares each number in an array.
var squareDance = function(arrNum){

	 for(var i= 0; i < arrNum.length; i++ ){

	 	arrNum[i] = Math.pow(arrNum[i], 2) 
	}
 	return arrNum

}

console.assert(squareDance([1, 2])[1] === 4)
console.assert(squareDance([5,10,15])[2] === 225)
console.assert(squareDance([3,6,9,3])[0] === 9)

// PART 1: write a function called nicer(). It should clean up the language in its input sentence.
// var nicer = function (stringArray){
// 	// Need to find not nice words and delete them

// 	 str.split('')

// 	for(var i= 0; i < stringArray.length; i++) {

// 		stringArray[i] = 
// 	}
// 	return stringArray
// }
var nicer = function (stringArray){

	var naughtyWords = ['heck', 'darn', 'crappy', 'dang']
	var words = stringArray.split(' ')
	var naughtWordsLocation = []

	for(var i = 0; i < words.length; i++){

		if(naughtyWords.indexOf(words[i]) !== -1){
			naughtWordsLocation.push(i)
		}
	}

	for( var i = naughtWordsLocation.length-1; i >= 0 ; i--){
		console.log(i + ' ' + words[naughtWordsLocation[i]])
		words.splice( naughtWordsLocation[i], 1 )
		// words.slice(naughtWordsLocation[i], 1)
	}

	return words.join(' ')

}

console.assert(nicer("mom get the heck in here and bring me a darn sandwich.") === "mom get the in here and bring me a sandwich.")

console.assert(nicer("here son, your crappy sandwich is on the dang plate.") === "here son, your sandwich is on the plate.")

// PART 2: write a function called capitalizeAll(). It should take as input a sentence and capitalize the first letter of every word in the sentence. 
var capitalizeAll = function(sentence) {
	var words = sentence.split(' ')
	for(var i = 0; i < words.length; i++){
		var letters = words[i].split('')
		letters[0]  = letters[0].toUpperCase()
		words[i]    = letters.join('')
	}
	return words.join(' ')

}
console.assert(capitalizeAll('every day is like sunday.') === 'Every Day Is Like Sunday.')

// PART 3: write a function called properSentences(). It should take as input a string and capitalize the first letter of every sentence in that string. (For our purposes, all sentences will end with periods. Write one that works with ? and ! and receive a gratifying high five, right on the hand!)
var properSentences = function(paragraph) {
	var sentences = paragraph.split('. ')
	console.log (sentences)
	for(var i = 0; i < sentences.length; i++) {

		console.log(sentences[i])
		var words = sentences[i].split(' ')
		var letters = words[0].split('')
		console.log(letters)
		letters[0] =letters[0].toUpperCase()
		console.log(letters)
		words[0] = letters.join('')
		sentences[i] = words.join(' ')
	}
	return sentences.join('. ')
}
var paragraph = 'it was a fine morning. the wine was good. light slanted in through the cafe window.'

console.assert(properSentences(paragraph) === "It was a fine morning. The wine was good. Light slanted in through the cafe window.")

// PART 4: write a function called iPutTheFunIn(). It should take a string as input. The output should be a copy of the original string with the word 'fun' inserted into the center of the string. 
var iPutTheFunIn = function(word) {
	var center = word.length / 2
	console.log(word.length)
	console.log(center +' ' +word.slice (0, center) + " " + word.slice(center , word.length))
	var funword = word.slice (0, center) + "fun" + word.slice(center, word.length)
	console.log(word + ' ' +funword)
	return funword
}

console.assert(iPutTheFunIn("funerary") === "funefunrary")
console.assert(iPutTheFunIn("reds") === "refunds")

// PART 5: write a function called pipeline(). it should take three inputs: (1) a starting value, (2) a function, and (3) another function. it should use functions (2) and (3) on the starting value, one after the other, and return a new value that has been processed by both function (2) and function (3).

// the following three tests all correspond to the pipeline() function.
var pipeline = function(variable, function1, function2){
	var stepone = function1 (variable) 
	var steptwo = function2 (stepone)
	return steptwo
}

// test 1
var paragraph = 'mom bring your crappy self in here. i want a dang sandwich.'

console.assert(pipeline(paragraph,nicer,properSentences) === "Mom bring your self in here. I want a sandwich.")

// test 2
var squareNum = function(n){
	return n * n
}

var addOne = function(n) {
	return n + 1
}

console.assert(pipeline(7,squareNum,addOne) === 50)

// test 3
var exclaimAll = function(arr) {
	var newArr = []
	for (var i = 0; i < arr.length; i ++) {
		newArr.push(arr[i] + '!')
	}
	return newArr
}

var result = pipeline([10,20,30],squareDance,exclaimAll)
console.assert(result[1] === "400!")
console.assert(result[2] === "900!")
