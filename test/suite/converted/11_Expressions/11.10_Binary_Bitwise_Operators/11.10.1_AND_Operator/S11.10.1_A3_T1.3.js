// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator x & y returns ToNumber(x) & ToNumber(y)
 *
 * @path 11_Expressions/11.10_Binary_Bitwise_Operators/11.10.1_AND_Operator/S11.10.1_A3_T1.3.js
 * @description Type(x) and Type(y) are primitive string and String object
 */

//CHECK#1
if (("1" & "1") !== 1) {
  $ERROR('#1: ("1" & "1") === 1. Actual: ' + (("1" & "1")));
}

//CHECK#2
if ((new String("1") & "1") !== 1) {
  $ERROR('#2: (new String("1") & "1") === 1. Actual: ' + ((new String("1") & "1")));
}

//CHECK#3
if (("1" & new String("1")) !== 1) {
  $ERROR('#3: ("1" & new String("1")) === 1. Actual: ' + (("1" & new String("1"))));
}

//CHECK#4
if ((new String("1") & new String("1")) !== 1) {
  $ERROR('#4: (new String("1") & new String("1")) === 1. Actual: ' + ((new String("1") & new String("1"))));
}

//CHECK#5
if (("x" & "1") !== 0) {
  $ERROR('#5: ("x" & "1") === 0. Actual: ' + (("x" & "1")));
}

//CHECK#6
if (("1" & "x") !== 0) {
  $ERROR('#6: ("1" & "x") === 0. Actual: ' + (("1" & "x")));
}

