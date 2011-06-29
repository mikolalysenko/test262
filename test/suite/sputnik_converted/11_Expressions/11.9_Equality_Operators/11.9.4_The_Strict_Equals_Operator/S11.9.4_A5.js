// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.9.4_A5;
 * @section: 11.9.4, 11.9.6;
 * @assertion: Type(x) and Type(y) are String-s. 
 * Return true, if x and y are exactly the same sequence of characters; otherwise, return false;
 * @description: x and y are primitive strings;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.9.4_A5",

path: "TestCases/11_Expressions/11.9_Equality_Operators/11.9.4_The_Strict_Equals_Operator/S11.9.4_A5.js",

assertion: "Type(x) and Type(y) are String-s.",

description: "x and y are primitive strings",

test: function testcase() {
   //CHECK#1
if (!("" === "")) {
  $ERROR('#1: "" === ""');
}

//CHECK#2
if (!(" " === " ")) {
  $ERROR('#2: " " === " "');
}

//CHECK#3
if (!("string" === "string")) {
  $ERROR('#3: "string" === "string"');
}

//CHECK#4
if (" string" === "string ") {
  $ERROR('#4: " string" !== "string "');
}

//CHECK#5
if ("1.0" === "1") {
  $ERROR('#5: "1.0" !== "1"');
}

 }
});

