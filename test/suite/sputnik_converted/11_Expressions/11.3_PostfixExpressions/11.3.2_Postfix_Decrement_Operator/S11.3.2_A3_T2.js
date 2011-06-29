// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.3.2_A3_T2;
* @section: 11.3.2, 11.6.3;
* @assertion: Operator x-- returns x = ToNumber(x) - 1;
* @description: Type(x) is number primitive or Number object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.3.2_A3_T2",

path: "TestCases/11_Expressions/11.3_PostfixExpressions/11.3.2_Postfix_Decrement_Operator/S11.3.2_A3_T2.js",

assertion: "Operator x-- returns x = ToNumber(x) - 1",

description: "Type(x) is number primitive or Number object",

test: function testcase() {
   //CHECK#1
var x = 1.1; 
x--;
if (x !== 1.1 - 1) {
  $ERROR('#1: var x = 1.1; x--; x === 1.1 - 1. Actual: ' + (x));
}

//CHECK#2
var x = new Number(-0.1); 
x--; 
if (x !== -0.1 - 1) {
  $ERROR('#2: var x = new Number(-0.1); x--; x === -0.1 - 1. Actual: ' + (x));
}

 }
});

