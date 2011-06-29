// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S9.8.1_A7;
 * @section: 9.8.1;
 * @assertion: If 1 <= s < 1e21 or -1e21 s < -1 and s has a fractional 
 * component, return the string consisting of the most significant n digits of 
 * the decimal representation of s, followed by a decimal point '.', 
 * followed by the remaining k-n digits of the decimal representation of s;
 * @description: 1.0000001 and -1.0000001 convert to String by explicit transformation;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S9.8.1_A7",

path: "TestCases/09_Type_Conversion/9.8_ToString/9.8.1_ToString_Applied_to_the_Number_Type/S9.8.1_A7.js",

assertion: "If 1 <= s < 1e21 or -1e21 s < -1 and s has a fractional",

description: "1.0000001 and -1.0000001 convert to String by explicit transformation",

test: function testcase() {
   // CHECK#1
if (String(1.0000001) !== "1.0000001") {
  $ERROR('#1: String(1.0000001) === "1.0000001". Actual: ' + (String(1.0000001)));
}

// CHECK#2
if (String(-1.0000001) !== "-1.0000001") {
  $ERROR('#2: String(-1.0000001) === "-1.0000001". Actual: ' + (String(-1.0000001)));
}

 }
});

