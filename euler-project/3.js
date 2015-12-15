//The prime factors of 13195 are 5, 7, 13 and 29.

//What is the largest prime factor of the number 600851475143 ?
// but only for 1000!

var isprime = function(num){
	for(var i = 2; i < num; i++){
		if(num % i === 0){
			return false;
		};
	};
	return true;
};

var highestprime = 0;
for(var i = 0; i < 1000; i++){
	if(isprime(i)){
		highestprime = i;
	}
}

console.log(highestprime);
