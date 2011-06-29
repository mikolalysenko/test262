// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.13.2_A4.8_T2.3;
 * @section: 11.13.2, 11.7.3;
 * @assertion: The production x >>>= y is the same as x = x >>> y; 
 * @description: Type(x) is different from Type(y) and both types vary between Number (primitive or object) and Null;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.13.2_A4.8_T2.3",

path: "TestCases/11_Expressions/11.13_Assignment_Operators/11.13.2_Compound_Assignment/S11.13.2_A4.8_T2.3.js",

assertion: "The production x >>>= y is the same as x = x >>> y",

description: "Type(x) is different from Type(y) and both types vary between Number (primitive or object) and Null",

test: function testcase() {
   //CHECK#1
x = 1;
x >>>= null;
if (x !== 1) {
  $ERROR('#1: x = 1; x >>>= null; x === 1. Actual: ' + (x));
}

//CHECK#2
x = null;
x >>>= 1;
if (x !== 0) {
  $ERROR('#2: x = null; x >>>= 1; x === 0. Actual: ' + (x));
}

//CHECK#3
x = new Number(1);
x >>>= null;
if (x !== 1) {
  $ERROR('#3: x = new Number(1); x >>>= null; x === 1. Actual: ' + (x));
}

//CHECK#4
x = null;
x >>>= new Number(1);
if (x !== 0) {
  $ERROR('#4: x = null; x >>>= new Number(1); x === 0. Actual: ' + (x));
}

 }
});

