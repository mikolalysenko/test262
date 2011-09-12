// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If x is NaN, operator -x returns NaN
 *
 * @section 11.4.7
 * @path 11_Expressions/11.4_Unary_Operators/11.4.7_Unary_minus_Operator/S11.4.7_A4.1.js
 * @description Checking NaN
 */

//CHECK#1
if (isNaN(-NaN) !== true) {
  $ERROR('#1: -NaN === Not-a-Number. Actual: ' + (-NaN));
}

//CHECK#2
var x = NaN; 
if (isNaN(-x) != true) {
  $ERROR('#2: var x = NaN; -x === Not-a-Number. Actual: ' + (-x));
}

