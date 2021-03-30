// ==================================================
// DEFINE FUNCTION(S)
// ==================================================
function difference(num1, num2 = 0) {
return num1 - num2;
}

// ==================================================
// DEFINE AND EXECUTE TEST CASES
// ==================================================
try {
  // --------------------------------------------------
  // Test Case 1
  // --------------------------------------------------
  // It should return the difference of two numbers.
  var result = difference(6, 2);
  if (result !== 4) throw new Error('Expected difference(6, 2) to be 4. Received: ' + result);

  // --------------------------------------------------
  // Test Case 2
  // --------------------------------------------------
  // It should ignore additional numbers.
	var result = difference(6, 2, 3, 4, 5);
	if (result !== 4) throw new Error('Expected difference(6, 2, 3, 4, 5) to be 4. Received: ' + result);

  // --------------------------------------------------
  // Test Case 3
  // --------------------------------------------------
  // When invoked with only 1 number, it should return that number.
	var result = difference(6);
	  if (result !== 6) throw new Error('Expected difference(6) to be 4. Received: ' + result);

  // --------------------------------------------------
  // Test Case 4
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
