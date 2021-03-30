// ==================================================
// DEFINE FUNCTION(S)
// ==================================================
function sum(num1, num2) {
return num1 + num2;
}
function difference(num1, num2) {
return num1 - num2;
}

function calc(operation, num1, num2) {
	switch (operation){
	case 'add': return sum(num1,num2);
	case 'diff': return difference(num1,num2);
}
}

// ==================================================
// DEFINE AND EXECUTE TEST CASES
// ==================================================
try {
  // --------------------------------------------------
  // Test Case 1
  // --------------------------------------------------
  // It should return the correct sum when the user provides: 'add', 6, 2.
  var result = calc('add', 6, 2);
  if (result !== 8) throw new Error('Expected calc("add", 6, 2) to be 8. Received: ' + result);

  // --------------------------------------------------
  // Test Case 2
  // --------------------------------------------------
  // It should return the correct difference when the user provides: 'subtract', 20, 10.
	var result = calc('diff', 20, 10);
	  if (result !== 10) throw new Error('Expected calc("diff", 20, 10) to be 10. Received: ' + result);

  // --------------------------------------------------
  // Test Case 3
  // --------------------------------------------------
  // It should return the correct product when the user provides: 'multiply', 9, 9.

  // --------------------------------------------------
  // Test Case 4
  // --------------------------------------------------
  // It should return the correct quotient when the user provides: 'divide', 9, 3.

  // --------------------------------------------------
  // Test Case 5
  // --------------------------------------------------
  // It should return the message 'Operation not supported.' when the user provides: exponent, 2, 8.

  console.log('All tests passed successfully.');

// ==================================================
// PRINT ERRORS
// ==================================================
} catch (e) {
  console.warn('Whoops, the following test did not pass:');
  console.error(e.message);
}
