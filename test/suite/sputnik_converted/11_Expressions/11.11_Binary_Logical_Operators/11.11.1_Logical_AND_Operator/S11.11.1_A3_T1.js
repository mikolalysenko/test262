// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.11.1_A3_T1;
* @section: 11.11.1;
* @assertion: If ToBoolean(x) is false, return x;
* @description: Type(x) is primitive boolean and Type(y) is changed between primitive boolean and Boolean object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.11.1_A3_T1",

path: "TestCases/11_Expressions/11.11_Binary_Logical_Operators/11.11.1_Logical_AND_Operator/S11.11.1_A3_T1.js",

assertion: "If ToBoolean(x) is false, return x",

description: "Type(x) is primitive boolean and Type(y) is changed between primitive boolean and Boolean object",

test: function testcase() {
   //CHECK#1
if ((false && true) !== false) {
  $ERROR('#1: (false && true) === false');
}

//CHECK#2
if ((false && false) !== false) {
  $ERROR('#2: (false && false) === false');
}

//CHECK#3
if ((false && new Boolean(true)) !== false) {
  $ERROR('#3: (false && new Boolean(true)) === false');
}

//CHECK#4
if ((false && new Boolean(false)) !== false) {
  $ERROR('#4: (false && new Boolean(false)) === false');
}

 }
});

