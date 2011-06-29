// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.9.2_A3.2;
 * @section: 11.9.2, 11.9.3;
 * @assertion: If Type(x) is Boolean and Type(y) is Number, 
 * return the result of comparison ToNumber(x) != y;
 * @description: x is primitive boolean, y is primitive number;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.9.2_A3.2",

path: "TestCases/11_Expressions/11.9_Equality_Operators/11.9.2_The_Does_not_equals_Operator/S11.9.2_A3.2.js",

assertion: "If Type(x) is Boolean and Type(y) is Number,",

description: "x is primitive boolean, y is primitive number",

test: function testcase() {
   //CHECK#1
if ((true != 1) !== false) {
  $ERROR('#1: (true != 1) === false');
}

//CHECK#2
if ((false != "0") !== false) {
  $ERROR('#2: (false != "0") === false');
}

//CHECK#3
if ((true != new Boolean(true)) !== false) {
  $ERROR('#3: (true != new Boolean(true)) === false');
}

//CHECK#4
if ((true != {valueOf: function () {return 1}}) !== false) {
  $ERROR('#4: (true != {valueOf: function () {return 1}}) === false');
}


 }
});

