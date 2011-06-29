// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.7.3.6_A2;
 * @section: 15.7.3.6;
 * @assertion: Number.POSITIVE_INFINITY is ReadOnly;
 * @description: Checking if varying Number.POSITIVE_INFINITY fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.7.3.6_A2",

path: "TestCases/15_Native/15.7_Number_Objects/15.7.3_Properties_of_Number_Constructor/15.7.3.6_Number.POSITIVE_INFINITY/S15.7.3.6_A2.js",

assertion: "Number.POSITIVE_INFINITY is ReadOnly",

description: "Checking if varying Number.POSITIVE_INFINITY fails",

test: function testcase() {
   // CHECK#1
Number.POSITIVE_INFINITY = 1;
if (isFinite(Number.POSITIVE_INFINITY)) {
  $ERROR('#1: Number.POSITIVE_INFINITY = 1; Number.POSITIVE_INFINITY === +Infinity');
} else { 
  if (Number.POSITIVE_INFINITY <= 0) {
    $ERROR('#1: Number.POSITIVE_INFINITY = 1; Number.POSITIVE_INFINITY === +Infinity');
  }
}

 }
});

