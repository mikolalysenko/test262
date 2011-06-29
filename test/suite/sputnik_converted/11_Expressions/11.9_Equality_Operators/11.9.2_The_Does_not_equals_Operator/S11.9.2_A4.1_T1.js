// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.9.2_A4.1_T1;
 * @section: 11.9.2, 11.9.3;
 * @assertion: If x or y is NaN, return true;
 * @description: x is NaN;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.9.2_A4.1_T1",

path: "TestCases/11_Expressions/11.9_Equality_Operators/11.9.2_The_Does_not_equals_Operator/S11.9.2_A4.1_T1.js",

assertion: "If x or y is NaN, return true",

description: "x is NaN",

test: function testcase() {
   //CHECK#1
if ((Number.NaN != true) !== true) {
  $ERROR('#1: (NaN != true) === true');
}

//CHECK#2
if ((Number.NaN != 1) !== true) {
  $ERROR('#2: (NaN != 1) === true');
}

//CHECK#3
if ((Number.NaN != Number.NaN) !== true) {
  $ERROR('#3: (NaN != NaN) === true');
}

//CHECK#4
if ((Number.NaN != Number.POSITIVE_INFINITY) !== true) {
  $ERROR('#4: (NaN != +Infinity) === true');
}

//CHECK#5
if ((Number.NaN != Number.NEGATIVE_INFINITY) !== true) {
  $ERROR('#5: (NaN != -Infinity) === true');
}

//CHECK#6
if ((Number.NaN != Number.MAX_VALUE) !== true) {
  $ERROR('#6: (NaN != Number.MAX_VALUE) === true');
}

//CHECK#7
if ((Number.NaN != Number.MIN_VALUE) !== true) {
  $ERROR('#7: (NaN != Number.MIN_VALUE) === true');
}

//CHECK#8
if ((Number.NaN != "string") !== true) {
  $ERROR('#8: (NaN != "string") === true');
}

//CHECK#9
if ((Number.NaN != new Object()) !== true) {
  $ERROR('#9: (NaN != new Object()) === true');
}


 }
});

