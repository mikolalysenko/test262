// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.6.2_A3_T1.4;
 * @section: 11.6.2;
 * @assertion: Operator x - y returns ToNumber(x) - ToNumber(y); 
 * @description: Type(x) and Type(y) vary between Null and Undefined;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.6.2_A3_T1.4",

path: "TestCases/11_Expressions/11.6_Additive_Operators/11.6.2_The_Subtraction_operator/S11.6.2_A3_T1.4.js",

assertion: "Operator x - y returns ToNumber(x) - ToNumber(y)",

description: "Type(x) and Type(y) vary between Null and Undefined",

test: function testcase() {
   //CHECK#1
if (isNaN(null - undefined) !== true) {
  $ERROR('#1: null - undefined === Not-a-Number. Actual: ' + (null - undefined));
}

//CHECK#2
if (isNaN(undefined - null) !== true) {
  $ERROR('#2: undefined - null === Not-a-Number. Actual: ' + (undefined - null));
}

//CHECK#3
if (isNaN(undefined - undefined) !== true) {
  $ERROR('#3: undefined - undefined === Not-a-Number. Actual: ' + (undefined - undefined));
}

//CHECK#4
if (null - null !== 0) {
  $ERROR('#4: null - null === 0. Actual: ' + (null - null));
}

 }
});

