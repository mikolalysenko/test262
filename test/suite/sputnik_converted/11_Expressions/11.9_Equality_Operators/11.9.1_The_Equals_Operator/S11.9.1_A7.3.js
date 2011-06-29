// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.9.1_A7.3;
 * @section: 11.9.1, 11.9.3;
 * @assertion: If Type(x) is Boolean and Type(y) is Object,
 * return x == ToPrimitive(y); 
 * @description: y is object, x is primitive boolean;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.9.1_A7.3",

path: "TestCases/11_Expressions/11.9_Equality_Operators/11.9.1_The_Equals_Operator/S11.9.1_A7.3.js",

assertion: "If Type(x) is Boolean and Type(y) is Object,",

description: "y is object, x is primitive boolean",

test: function testcase() {
   //CHECK#1
if ((true == new Boolean(true)) !== true) {
  $ERROR('#1: (true == new Boolean(true)) === true');
}

//CHECK#2
if ((true == new Number(1)) !== true) {
  $ERROR('#2: (true == new Number(1)) === true');
}

//CHECK#3
if ((true == new String("+1")) !== true) {
  $ERROR('#3: (true == new String("+1")) === true');
}

 }
});

