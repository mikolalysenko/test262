// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.8.1.7_A4;
 * @section: 15.8.1.7;
 * @assertion: Value Property SQRT1_2 of the Math Object has the attribute ReadOnly;
 * @description: Checking if Math.SQRT1_2 property has the attribute ReadOnly;
 * @strict_mode_negative
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.8.1.7_A4",

path: "TestCases/15_Native/15.8_The_Math_Object/15.8.1_Value_Properties_of_the_Math_Object/15.8.1.7_SQRT1_2/S15.8.1.7_A4.js",

assertion: "Value Property SQRT1_2 of the Math Object has the attribute ReadOnly",

description: "Checking if Math.SQRT1_2 property has the attribute ReadOnly",

test: function testcase() {
   // CHECK#1
var x = Math.SQRT1_2;
Math.SQRT1_2 = 1;
if (Math.SQRT1_2 !== x) {
  $ERROR('#1: Math.SQRT1_2 hasn\'t ReadOnly: \'x = Math.SQRT1_2;Math.SQRT1_2 = 1;Math.SQRT1_2 === x\'');
}

 }
});

