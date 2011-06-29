// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.10.2_A2.1_T1;
 * @section: 11.10.2;
 * @assertion: Operator x ^ y uses GetValue;
 * @description: Either Type is not Reference or GetBase is not null;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.10.2_A2.1_T1",

path: "TestCases/11_Expressions/11.10_Binary_Bitwise_Operators/11.10.2_XOR_Operator/S11.10.2_A2.1_T1.js",

assertion: "Operator x ^ y uses GetValue",

description: "Either Type is not Reference or GetBase is not null",

test: function testcase() {
   //CHECK#1
if ((1 ^ 1) !== 0) {
  $ERROR('#1: (1 ^ 1) === 0. Actual: ' + ((1 ^ 1)));
}

//CHECK#2
var x = 1;
if ((x ^ 1) !== 0) {
  $ERROR('#2: var x = 1; (x ^ 1) === 0. Actual: ' + ((x ^ 1)));
}

//CHECK#3
var y = 1;
if ((1 ^ y) !== 0) {
  $ERROR('#3: var y = 1; (1 ^ y) === 0. Actual: ' + ((1 ^ y)));
}

//CHECK#4
var x = 1;
var y = 1;
if ((x ^ y) !== 0) {
  $ERROR('#4: var x = 1; var y = 1; (x ^ y) === 0. Actual: ' + ((x ^ y)));
}

//CHECK#5
var objectx = new Object();
var objecty = new Object();
objectx.prop = 1;
objecty.prop = 1;
if ((objectx.prop ^ objecty.prop) !== 0) {
  $ERROR('#5: var objectx = new Object(); var objecty = new Object(); objectx.prop = 1; objecty.prop = 1; (objectx.prop ^ objecty.prop) === 0. Actual: ' + ((objectx.prop ^ objecty.prop)));
}
 

 }
});

