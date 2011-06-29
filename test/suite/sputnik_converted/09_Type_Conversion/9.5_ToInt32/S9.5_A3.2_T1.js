// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S9.5_A3.2_T1;
 * @section: 9.5;
 * @assertion: Operator uses floor, abs;
 * @description: Use operator <<0;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S9.5_A3.2_T1",

path: "TestCases/09_Type_Conversion/9.5_ToInt32/S9.5_A3.2_T1.js",

assertion: "Operator uses floor, abs",

description: "Use operator <<0",

test: function testcase() {
   // CHECK#1
if ((1.2345 << 0) !== 1) {
  $ERROR('#1: (1.2345 << 0) === 1. Actual: ' + ((1.2345 << 0)));
}

// CHECK#2
if ((-5.4321 << 0) !== -5) {
  $ERROR('#2: (-5.4321 << 0) === -5. Actual: ' + ((-5.4321 << 0)));
}

 }
});

