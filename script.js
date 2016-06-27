for (i = 1; i <= 100; i++) {	
	n = i % 3;
	m = i % 5;
	if (n == 0 && m == 0) {
		console.log("FizzBuzz");
	}
	else if (n == 0) {
		console.log("Fizz");
	}
	else if (m == 0) {
		console.log("Buzz");
	}
	else {
		console.log(i);
	}
}