// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.8.2.17_A1;
 * @section: 15.8.2.17;
 * @assertion: If x is NaN, Math.sqrt(x) is NaN;
 * @description: Checking if Math.sqrt(NaN) is NaN;
 */
 

// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.8.2.17_A1",

path: "TestCases/15_Native/15.8_The_Math_Object/15.8.2_Function_Properties_of_the_Math_Object/15.8.2.17_sqrt/S15.8.2.17_A1.js",

assertion: "If x is NaN, Math.sqrt(x) is NaN",

description: "Checking if Math.sqrt(NaN) is NaN",

test: function testcase() {
   // CHECK#1
var x = NaN;
if (!isNaN(Math.sqrt(x)))
{
	$ERROR("#1: 'var x=NaN; isNaN(Math.sqrt(x)) === false'");
}

 }
});

