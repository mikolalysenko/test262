// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.8.2.9_A7;
 * @section: 15.8.2.9;
 * @assertion: The value of Math.floor(x) is the same as the value of -Math.ceil(-x);
 * @description: Checking if Math.floor(x) is equal to -Math.ceil(-x) on 2000 floating-point argument values;
 */
 

// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.8.2.9_A7",

path: "TestCases/15_Native/15.8_The_Math_Object/15.8.2_Function_Properties_of_the_Math_Object/15.8.2.9_floor/S15.8.2.9_A7.js",

assertion: "The value of Math.floor(x) is the same as the value of -Math.ceil(-x)",

description: "Checking if Math.floor(x) is equal to -Math.ceil(-x) on 2000 floating-point argument values",

test: function testcase() {
   // CHECK#1
for (i=-1000; i<1000; i++)
{
	x = i/10.0;
	if (-Math.ceil(-x) !== Math.floor(x))
	{
		$ERROR("#1: 'x = " + x + "; Math.floor(x) !== -Math.ceil(-x)'");
	}
}

 }
});

