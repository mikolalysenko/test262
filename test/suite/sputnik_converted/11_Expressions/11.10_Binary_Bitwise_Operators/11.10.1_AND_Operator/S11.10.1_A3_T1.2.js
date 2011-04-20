// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.10.1_A3_T1.2;
 * @section: 11.10.1;
 * @assertion: Operator x & y returns ToNumber(x) & ToNumber(y);
 * @description: Type(x) and Type(y) are primitive number and Number object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.10.1_A3_T1.2",

path: "11_Expressions\11.10_Binary_Bitwise_Operators\11.10.1_AND_Operator\S11.10.1_A3_T1.2.js",

assertion: "Operator x & y returns ToNumber(x) & ToNumber(y)",

description: "Type(x) and Type(y) are primitive number and Number object",

test: function testcase() {
   //CHECK#1
if ((1 & 1) !== 1) {
  $ERROR('#1: (1 & 1) === 1. Actual: ' + ((1 & 1)));
}

//CHECK#2
if ((new Number(1) & 1) !== 1) {
  $ERROR('#2: (new Number(1) & 1) === 1. Actual: ' + ((new Number(1) & 1)));
}

//CHECK#3
if ((1 & new Number(1)) !== 1) {
  $ERROR('#3: (1 & new Number(1)) === 1. Actual: ' + ((1 & new Number(1))));
}

//CHECK#4
if ((new Number(1) & new Number(1)) !== 1) {
  $ERROR('#4: (new Number(1) & new Number(1)) === 1. Actual: ' + ((new Number(1) & new Number(1))));
}


 }
});

