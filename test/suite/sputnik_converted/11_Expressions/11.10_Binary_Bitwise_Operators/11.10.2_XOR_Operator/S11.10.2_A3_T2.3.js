// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.10.2_A3_T2.3;
 * @section: 11.10.2;
 * @assertion: Operator x ^ y returns ToNumber(x) ^ ToNumber(y); 
 * @description: Type(x) is different from Type(y) and both types vary between Number (primitive or object) and Null;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.10.2_A3_T2.3",

path: "TestCases/11_Expressions/11.10_Binary_Bitwise_Operators/11.10.2_XOR_Operator/S11.10.2_A3_T2.3.js",

assertion: "Operator x ^ y returns ToNumber(x) ^ ToNumber(y)",

description: "Type(x) is different from Type(y) and both types vary between Number (primitive or object) and Null",

test: function testcase() {
   //CHECK#1
if ((1 ^ null) !== 1) {
  $ERROR('#1: (1 ^ null) === 1. Actual: ' + ((1 ^ null)));
}

//CHECK#2
if ((null ^ 1) !== 1) {
  $ERROR('#2: (null ^ 1) === 1. Actual: ' + ((null ^ 1)));
}

//CHECK#3
if ((new Number(1) ^ null) !== 1) {
  $ERROR('#3: (new Number(1) ^ null) === 1. Actual: ' + ((new Number(1) ^ null)));
}

//CHECK#4
if ((null ^ new Number(1)) !== 1) {
  $ERROR('#4: (null ^ new Number(1)) === 1. Actual: ' + ((null ^ new Number(1))));
}

 }
});

