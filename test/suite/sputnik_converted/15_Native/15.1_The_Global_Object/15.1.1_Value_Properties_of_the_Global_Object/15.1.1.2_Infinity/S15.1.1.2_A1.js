// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.1.2_A1;
 * @section: 15.1.1.2, 11.4.3, 15.1.2.4, 15.1.2.5;
 * @assertion: The initial value of Infinity is Number.POSITIVE_INFINITY;
 * @description: Use typeof, isNaN, isFinite;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.1.2_A1",

path: "TestCases/15_Native/15.1_The_Global_Object/15.1.1_Value_Properties_of_the_Global_Object/15.1.1.2_Infinity/S15.1.1.2_A1.js",

assertion: "The initial value of Infinity is Number.POSITIVE_INFINITY",

description: "Use typeof, isNaN, isFinite",

test: function testcase() {
   // CHECK#1
if (typeof(Infinity) !== "number") {
	$ERROR('#1: typeof(Infinity) === "number". Actual: ' + (typeof(Infinity))); 
}

// CHECK#2
if (isFinite(Infinity) !== false) {
	$ERROR('#2: Infinity === Not-a-Finite. Actual: ' + (Infinity)); 
}

// CHECK#3
if (isNaN(Infinity) !== false) {
	$ERROR('#3: Infinity === Not-a-Number. Actual: ' + (Infinity)); 
}


// CHECK#4
if (Infinity !== Number.POSITIVE_INFINITY) {
	$ERROR('#4: Infinity === Number.POSITIVE_INFINITY. Actual: ' + (Infinity)); 
}

 }
});

