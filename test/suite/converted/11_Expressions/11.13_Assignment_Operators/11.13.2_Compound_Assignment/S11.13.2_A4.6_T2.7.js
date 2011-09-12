// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The production x <<= y is the same as x = x << y
 *
 * @section 11.13.2, 11.7.1
 * @path 11_Expressions/11.13_Assignment_Operators/11.13.2_Compound_Assignment/S11.13.2_A4.6_T2.7.js
 * @description Type(x) is different from Type(y) and both types vary between String (primitive or object) and Null
 */

//CHECK#1
x = "1";
x <<= null;
if (x !== 1) {
  $ERROR('#1: x = "1"; x <<= null; x === 1. Actual: ' + (x));
}

//CHECK#2
x = null;
x <<= "1";
if (x !== 0) {
  $ERROR('#2: x = null; x <<= "1"; x === 0. Actual: ' + (x));
}

//CHECK#3
x = new String("1");
x <<= null;
if (x !== 1) {
  $ERROR('#3: x = new String("1"); x <<= null; x === 1. Actual: ' + (x));
}

//CHECK#4
x = null;
x <<= new String("1");
if (x !== 0) {
  $ERROR('#4: x = null; x <<= new String("1"); x === 0. Actual: ' + (x));
}

