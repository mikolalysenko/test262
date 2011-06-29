// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.10.1_A3_T2.4;
 * @section: 11.10.1;
 * @assertion: Operator x & y returns ToNumber(x) & ToNumber(y); 
 * @description: Type(x) is different from Type(y) and both types vary between Number (primitive or object) and Undefined;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.10.1_A3_T2.4",

path: "TestCases/11_Expressions/11.10_Binary_Bitwise_Operators/11.10.1_AND_Operator/S11.10.1_A3_T2.4.js",

assertion: "Operator x & y returns ToNumber(x) & ToNumber(y)",

description: "Type(x) is different from Type(y) and both types vary between Number (primitive or object) and Undefined",

test: function testcase() {
   //CHECK#1
if ((1 & undefined) !== 0) {
  $ERROR('#1: (1 & undefined) === 0. Actual: ' + ((1 & undefined)));
}

//CHECK#2
if ((undefined & 1) !== 0) {
  $ERROR('#2: (undefined & 1) === 0. Actual: ' + ((undefined & 1)));
}

//CHECK#3
if ((new Number(1) & undefined) !== 0) {
  $ERROR('#3: (new Number(1) & undefined) === 0. Actual: ' + ((new Number(1) & undefined)));
}

//CHECK#4
if ((undefined & new Number(1)) !== 0) {
  $ERROR('#4: (undefined & new Number(1)) === 0. Actual: ' + ((undefined & new Number(1))));
}

 }
});

