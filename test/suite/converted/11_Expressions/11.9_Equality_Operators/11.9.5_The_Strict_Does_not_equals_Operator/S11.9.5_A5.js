// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Type(x) and Type(y) are String-s.
 * Return false, if x and y are exactly the same sequence of characters; otherwise, return true
 *
 * @section 11.9.5, 11.9.6
 * @path 11_Expressions/11.9_Equality_Operators/11.9.5_The_Strict_Does_not_equals_Operator/S11.9.5_A5.js
 * @description x and y are primitive strings
 */

//CHECK#1
if ("" !== "") {
  $ERROR('#1: "" === ""');
}

//CHECK#2
if (" " !== " ") {
  $ERROR('#2: " " === " "');
}

//CHECK#3
if ("string" !== "string") {
  $ERROR('#3: "string" === "string"');
}

//CHECK#4
if (!(" string" !== "string ")) {
  $ERROR('#4: " string" !== "string "');
}

//CHECK#5
if (!("1.0" !== "1")) {
  $ERROR('#5: "1.0" !== "1"');
}

