// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.4.5_A3_T1;
* @section: 11.4.5, 11.6.3;
* @assertion: Operator --x returns x = ToNumber(x) - 1;
* @description: Type(x) is boolean primitive or Boolean object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.4.5_A3_T1",

path: "TestCases/11_Expressions/11.4_Unary_Operators/11.4.5_Prefix_Decrement_Operator/S11.4.5_A3_T1.js",

assertion: "Operator --x returns x = ToNumber(x) - 1",

description: "Type(x) is boolean primitive or Boolean object",

test: function testcase() {
   //CHECK#1
var x = true; 
--x;
if (x !== 1 - 1) {
  $ERROR('#1: var x = true; --x; x === 1 - 1. Actual: ' + (x));
}

//CHECK#2
var x = new Boolean(false); 
--x;
if (x !== 0 - 1) {
  $ERROR('#2: var x = new Boolean(false); --x; x === 0 - 1. Actual: ' + (x));
}

 }
});

