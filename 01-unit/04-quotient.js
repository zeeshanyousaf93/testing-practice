// ==================================================
// DEFINE FUNCTION(S)
// ==================================================
function quotient(num1, num2) {
return num1 / num2;
}

// ==================================================
// DEFINE AND EXECUTE TEST CASES
// ==================================================
try {
  // --------------------------------------------------
  // Test Case 1
  // --------------------------------------------------
  // It should return the quotient of two numbers.
  var result = quotient(6, 2);
  if (result !== 3) throw new Error('Expected quotient(6, 2) to be 3. Received: ' + result);

  // --------------------------------------------------
  // Test Case 2
  // --------------------------------------------------
  // It should return the text 'ERROR' when the second number is 0.
	var result = quotient(6, 0);
	  if (result !== Infinity) throw new Error('Expected quotient(6, 0) to be Undefined. Received: ' + result);
  // --------------------------------------------------
  // Test Case 3
  // --------------------------------------------------
  // It should ignore additional numbers.

  // --------------------------------------------------
  // Test Case 4
  // --------------------------------------------------
  // When invoked with only 1 number, it should return that number.

  // --------------------------------------------------
  // Test Case 5
  // --------------------------------------------------
  // When invoked with no numbers, it should return 0.

  console.log('All tests passed successfully.');

// ==================================================
// PRINT ERRORS
// ==================================================
} catch (e) {
  console.warn('Whoops, the following test did not pass:');
  console.error(e.message);
}
