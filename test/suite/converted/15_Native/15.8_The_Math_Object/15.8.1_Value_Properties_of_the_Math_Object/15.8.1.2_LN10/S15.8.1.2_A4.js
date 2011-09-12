// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Value Property LN10 of the Math Object has the attribute ReadOnly
 *
 * @section 15.8.1.2
 * @path 15_Native/15.8_The_Math_Object/15.8.1_Value_Properties_of_the_Math_Object/15.8.1.2_LN10/S15.8.1.2_A4.js
 * @description Checking if Math.LN10 property has the attribute ReadOnly
 * @strict_only
 * @strict_mode_negative
 */

// CHECK#1
var x = Math.LN10;
Math.LN10 = 1;
if (Math.LN10 !== x) {
  $ERROR('#1: Math.LN10 hasn\'t ReadOnly: \'x = Math.LN10;Math.LN10 = 1;Math.LN10 === x\'');
}

