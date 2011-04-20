// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.10.1_A3_T2.8;
 * @section: 11.10.1;
 * @assertion: Operator x & y returns ToNumber(x) & ToNumber(y); 
 * @description: Type(x) is different from Type(y) and both types vary between Boolean (primitive or object) and Undefined;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.10.1_A3_T2.8",

path: "11_Expressions\11.10_Binary_Bitwise_Operators\11.10.1_AND_Operator\S11.10.1_A3_T2.8.js",

assertion: "Operator x & y returns ToNumber(x) & ToNumber(y)",

description: "Type(x) is different from Type(y) and both types vary between Boolean (primitive or object) and Undefined",

test: function testcase() {
   //CHECK#1
if ((true & undefined) !== 0) {
  $ERROR('#1: (true & undefined) === 0. Actual: ' + ((true & undefined)));
}

//CHECK#2
if ((undefined & true) !== 0) {
  $ERROR('#2: (undefined & true) === 0. Actual: ' + ((undefined & true)));
}

//CHECK#3
if ((new Boolean(true) & undefined) !== 0) {
  $ERROR('#3: (new Boolean(true) & undefined) === 0. Actual: ' + ((new Boolean(true) & undefined)));
}

//CHECK#4
if ((undefined & new Boolean(true)) !== 0) {
  $ERROR('#4: (undefined & new Boolean(true)) === 0. Actual: ' + ((undefined & new Boolean(true))));
}

 }
});

