// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S9.8.1_A1;
 * @section: 9.8.1;
 * @assertion: If m is NaN, return the string "NaN";
 * @description: NaN convert to String by explicit transformation;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S9.8.1_A1",

path: "TestCases/09_Type_Conversion/9.8_ToString/9.8.1_ToString_Applied_to_the_Number_Type/S9.8.1_A1.js",

assertion: "If m is NaN, return the string \"NaN\"",

description: "NaN convert to String by explicit transformation",

test: function testcase() {
   // CHECK#1
if (String(NaN) !== "NaN") {
  $ERROR('#1: String(NaN) === Not-a-Number Actual: ' + (String(NaN)));
}

// CHECK#2
if (String(Number.NaN) !== "NaN") {
  $ERROR('#2: String(Number.NaN) === Not-a-Number Actual: ' + (String(Number.NaN)));
}

// CHECK#3
if (String(Number("asasa")) !== "NaN") {
  $ERROR('#3: String(Number("asasa")) === Not-a-Number Actual: ' + (String(Number("asasa"))));
}

 }
});

