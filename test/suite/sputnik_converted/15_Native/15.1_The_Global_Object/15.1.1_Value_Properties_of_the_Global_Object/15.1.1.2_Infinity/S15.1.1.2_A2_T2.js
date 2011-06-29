// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.1.2_A2_T2;
 * @section: 15.1.1.2, 11.4.3;
 * @assertion: The Infinity is not ReadOnly;
 * @description: Checking typeof Functions; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.1.2_A2_T2",

path: "TestCases/15_Native/15.1_The_Global_Object/15.1.1_Value_Properties_of_the_Global_Object/15.1.1.2_Infinity/S15.1.1.2_A2_T2.js",

assertion: "The Infinity is not ReadOnly",

description: "Checking typeof Functions",

test: function testcase() {
   // CHECK#1
var Finite = true;
if (typeof(Finite) !== "boolean") {
	$ERROR('#1: Finite = true; typeof(NaN) === "boolean". Actual: ' + (typeof(NaN))); 
}

 }
});

