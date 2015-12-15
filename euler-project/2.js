//Each new term in the Fibonacci sequence is generated 
//by adding the previous two terms. By starting with 1 and 2,
// the first 10 terms will be:

//1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

//By considering the terms in the Fibonacci sequence whose 
//values do not exceed four million, find the sum of the 
//even-valued terms.

var i = 0;
var j = 1;
var MAX = 4000000;

var sum = 0;
while(i < MAX && j < MAX){
	var total = 0;
	total = i + j;
	i = j;
	j = total;
	if(total % 2 == 0){
		sum += total;
	}
}

console.log(sum);