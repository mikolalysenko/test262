// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator !x returns !ToBoolean(x)
 *
 * @section 11.4.9
 * @path 11_Expressions/11.4_Unary_Operators/11.4.9_Logical_NOT_Operator/S11.4.9_A3_T3.js
 * @description Type(x) is string primitive or String object
 */

//CHECK#1
if (!"1" !== false) {
  $ERROR('#1: !"1" === false');
}

//CHECK#2
if (!new String("0") !== false) {
  $ERROR('#2: !new String("0") === false');
}

//CHECK#3
if (!"x" !== false) {
  $ERROR('#3: !"x" === false');
}

//CHECK#4
if (!"" !== true) {
  $ERROR('#4: !"" === true');
}

//CHECK#5
if (!new String("") !== false) {
  $ERROR('#5: !new String("") === false');
}

